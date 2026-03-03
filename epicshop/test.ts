import { performance } from 'perf_hooks'
import {
	getApps,
	getAppDisplayName,
} from '@epic-web/workshop-utils/apps.server'
import enquirer from 'enquirer'
import { execa } from 'execa'
import { matchSorter } from 'match-sorter'
import pLimit from 'p-limit'

const { prompt } = enquirer

type OutputEntry = { chunk: string; streamType: 'stdout' | 'stderr' }

function captureOutput() {
	const output: Array<OutputEntry> = []
	return {
		write: (chunk: Buffer | string, streamType: 'stdout' | 'stderr') => {
			output.push({ chunk: chunk.toString(), streamType })
		},
		replay: () => {
			for (const { chunk, streamType } of output) {
				if (streamType === 'stderr') {
					process.stderr.write(chunk)
				} else {
					process.stdout.write(chunk)
				}
			}
		},
		hasOutput: () => output.length > 0,
	}
}

type TestResult = { result: 'Passed' | 'Failed' | 'Error' | 'Incomplete'; duration: number }
type AppUnderTest = Awaited<ReturnType<typeof getApps>>[number]
type RunningProcess = {
	app: AppUnderTest
	output: ReturnType<typeof captureOutput>
	startTime: number
	subprocess?: ReturnType<typeof execa>
}

function isExerciseStepApp(
	app: AppUnderTest,
): app is AppUnderTest & {
	exerciseNumber: number
	stepNumber: number
	type: 'problem' | 'solution'
} {
	return app.type === 'problem' || app.type === 'solution'
}

function getAppPattern(app: AppUnderTest) {
	if (!isExerciseStepApp(app)) return null
	return `${app.exerciseNumber}.${app.stepNumber}.${app.type}`
}

function getAppPort(app: AppUnderTest) {
	return app.dev.type === 'script' ? String(app.dev.portNumber) : undefined
}

function printTestSummary(results: Map<string, TestResult>) {
	const label = '--- Test Summary ---'
	console.log(`\n${label}`)
	for (const [appPath, { result, duration }] of results) {
		let emoji
		switch (result) {
			case 'Passed':
				emoji = '✅'
				break
			case 'Failed':
				emoji = '❌'
				break
			case 'Error':
				emoji = '💥'
				break
			case 'Incomplete':
				emoji = '⏳'
				break
			default:
				emoji = '❓'
		}
		console.log(`${emoji} ${appPath} (${duration.toFixed(2)}s)`)
	}
	console.log(`${'-'.repeat(label.length)}\n`)
}

function parseCliArgs(argv: Array<string>) {
	const argIndex = argv.indexOf('--')
	const positionalArgs = argIndex === -1 ? argv.slice(2) : argv.slice(2, argIndex)
	return {
		patternArg: positionalArgs[0],
		additionalArgs: argIndex === -1 ? [] : argv.slice(argIndex + 1),
	}
}

async function main() {
	const allApps = await getApps()
	const allAppsWithTests = allApps.filter((app) => app.test?.type === 'script')

	if (allAppsWithTests.length === 0) {
		console.error(
			'❌ No apps with tests were found. Ensure your apps have a test script defined in the package.json. Exiting.',
		)
		return 1
	}

	let selectedApps: Array<AppUnderTest> = []
	const { patternArg, additionalArgs } = parseCliArgs(process.argv)

	if (patternArg) {
		const patterns = patternArg.toLowerCase().split(',')
		selectedApps = allAppsWithTests.filter((app) => {
			if (!isExerciseStepApp(app)) return false
			const { exerciseNumber, stepNumber, type } = app

			return patterns.some((pattern) => {
				let [patternExercise = '*', patternStep = '*', patternType = '*'] =
					pattern.split('.')

				patternExercise ||= '*'
				patternStep ||= '*'
				patternType ||= '*'

				return (
					(patternExercise === '*' ||
						exerciseNumber === Number(patternExercise)) &&
					(patternStep === '*' || stepNumber === Number(patternStep)) &&
					(patternType === '*' || type.includes(patternType))
				)
			})
		})
	} else {
		const displayNameMap = new Map(
			allAppsWithTests.map((app) => [
				getAppDisplayName(app, allAppsWithTests),
				app,
			]),
		)
		const choices = displayNameMap.keys()

		const response = await (prompt as Function)({
			type: 'autocomplete',
			name: 'appDisplayNames',
			message: 'Select apps to test:',
			choices: ['All', ...Array.from(choices)],
			multiple: true,
			suggest: (input: string, choices: Array<{ name: string }>) => {
				return matchSorter(choices, input, { keys: ['name'] })
			},
		})

		const selectedFromPrompt = response.appDisplayNames.includes('All')
			? allAppsWithTests
			: response.appDisplayNames.map((appDisplayName: string) =>
					displayNameMap.get(appDisplayName),
				)
		selectedApps = selectedFromPrompt.filter(
			(app): app is AppUnderTest => app !== undefined,
		)
		if (selectedApps.length !== selectedFromPrompt.length) {
			console.warn('⚠️ Some selected apps were not resolved and were skipped.')
		}

		const selectedExercisePatterns = selectedApps
			.map(getAppPattern)
			.filter((pattern): pattern is string => pattern !== null)
		const appPattern =
			selectedApps.length === allAppsWithTests.length
				? '*'
				: selectedExercisePatterns.length > 0
					? selectedExercisePatterns.join(',')
					: '*'
		const additionalArgsString =
			additionalArgs.length > 0 ? ` -- ${additionalArgs.join(' ')}` : ''
		console.log(`\nℹ️  To skip the prompt next time, use this command:`)
		console.log(`npm test -- ${appPattern}${additionalArgsString}\n`)
	}

	if (selectedApps.length === 0) {
		console.log('⚠️ No apps selected. Exiting.')
		return 0
	}

	if (selectedApps.length === 1) {
		const app = selectedApps[0]
		console.log(`🚀 Running tests for ${app.relativePath}\n\n`)
		const startTime = performance.now()
		try {
			await execa('npm', ['run', 'test', '--silent', '--', ...additionalArgs], {
				cwd: app.fullPath,
				stdio: 'inherit',
				env: {
					...process.env,
					PORT: getAppPort(app),
				},
			})
			const duration = (performance.now() - startTime) / 1000
			console.log(
				`✅ Finished tests for ${app.relativePath} (${duration.toFixed(2)}s)`,
			)
		} catch {
			const duration = (performance.now() - startTime) / 1000
			console.error(
				`❌ Tests failed for ${app.relativePath} (${duration.toFixed(2)}s)`,
			)
			return 1
		}
	} else {
		const limit = pLimit(1)
		let hasFailures = false
		const runningProcesses = new Map<string, RunningProcess>()
		let isShuttingDown = false
		const results = new Map<string, TestResult>()

		const shutdownHandler = () => {
			if (isShuttingDown) return
			isShuttingDown = true
			hasFailures = true
			console.log('\nGracefully shutting down. Please wait...')
			console.log('Outputting results of running tests:')
			for (const { app, output, startTime, subprocess } of runningProcesses.values()) {
				subprocess?.kill('SIGTERM')
				if (output.hasOutput()) {
					console.log(`\nPartial results for ${app.relativePath}:\n\n`)
					output.replay()
					console.log('\n\n')
				} else {
					console.log(`ℹ️  No output captured for ${app.relativePath}`)
				}
				if (!results.has(app.relativePath)) {
					results.set(app.relativePath, {
						result: 'Incomplete',
						duration: (performance.now() - startTime) / 1000,
					})
				}
			}
			printTestSummary(results)
		}

		process.on('SIGINT', shutdownHandler)
		process.on('SIGTERM', shutdownHandler)

		const tasks = selectedApps.map((app) =>
			limit(async () => {
				if (isShuttingDown) return
				console.log(`🚀 Starting tests for ${app.relativePath}`)
				const output = captureOutput()
				const startTime = performance.now()
				try {
					const subprocess = execa(
						'npm',
						['run', 'test', '--silent', '--', ...additionalArgs],
						{
							cwd: app.fullPath,
							reject: false,
							env: {
								...process.env,
								PORT: getAppPort(app),
							},
						},
					)
					runningProcesses.set(app.relativePath, {
						app,
						output,
						startTime,
						subprocess,
					})

					subprocess.stdout?.on('data', (chunk: Buffer) => output.write(chunk, 'stdout'))
					subprocess.stderr?.on('data', (chunk: Buffer) => output.write(chunk, 'stderr'))

					const { exitCode } = await subprocess
					const duration = (performance.now() - startTime) / 1000

					runningProcesses.delete(app.relativePath)

					if (exitCode !== 0) {
						hasFailures = true
						console.error(
							`\n❌ Tests failed for ${app.relativePath} (${duration.toFixed(2)}s):\n\n`,
						)
						output.replay()
						console.log('\n\n')
						results.set(app.relativePath, { result: 'Failed', duration })
					} else {
						console.log(
							`✅ Finished tests for ${app.relativePath} (${duration.toFixed(2)}s)`,
						)
						results.set(app.relativePath, { result: 'Passed', duration })
					}
				} catch (error: any) {
					const duration = (performance.now() - startTime) / 1000
					runningProcesses.delete(app.relativePath)
					hasFailures = true
					console.error(
						`\n❌ An error occurred while running tests for ${app.relativePath} (${duration.toFixed(2)}s):\n\n`,
					)
					console.error(error.message)
					output.replay()
					console.log('\n\n')
					results.set(app.relativePath, { result: 'Error', duration })
				}
			}),
		)

		try {
			await Promise.all(tasks)
		} finally {
			process.off('SIGINT', shutdownHandler)
			process.off('SIGTERM', shutdownHandler)
		}

		// Print summary output
		printTestSummary(results)

		if (hasFailures || isShuttingDown) return 1
	}

	return 0
}

const exitCode = await main().catch((error) => {
	if (error) {
		console.error('❌ An error occurred:', error)
	}
	return 1
})
process.exitCode = exitCode
