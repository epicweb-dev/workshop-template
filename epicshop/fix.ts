// This should run by node without any dependencies
// because you may need to run it without deps.

import fs from 'node:fs'
import path from 'node:path'
import {
	exists,
	getScriptDir,
	readDirSorted,
	toPosixPath,
	uniqueSorted,
} from './script-utils.ts'

const __dirname = getScriptDir(import.meta.url)
const here = (...p: Array<string>) => path.join(__dirname, ...p)

const workshopRoot = here('..')
const extraApps = (await readDirSorted(here('../extra'))).map(dir =>
	here(`../extra/${dir}`),
)
const exercises = (await readDirSorted(here('../exercises')))
	.map(name => here(`../exercises/${name}`))
	.filter(filepath => fs.statSync(filepath).isDirectory())
const exerciseApps = (
	await Promise.all(
		exercises.flatMap(async exercise => {
			return (await readDirSorted(exercise))
				.filter(dir => {
					return /(problem|solution)/.test(dir)
				})
				.map(dir => path.join(exercise, dir))
		}),
	)
).flat()
const apps = uniqueSorted([...extraApps, ...exerciseApps])

const appsWithPkgJson = apps.filter(app => {
	const pkgjsonPath = path.join(app, 'package.json')
	return exists(pkgjsonPath)
})

// update the package.json file name property
// to match the parent directory name + directory name
// e.g. exercises/01-goo/problem.01-great
// name: "exercises__sep__01-goo.problem__sep__01-great"

function relativeToWorkshopRoot(dir: string) {
	return path.relative(workshopRoot, dir)
}

await updatePkgNames()
await updateTsconfig()

async function updatePkgNames() {
	for (const file of appsWithPkgJson) {
		const pkgjsonPath = path.join(file, 'package.json')
		const pkg = JSON.parse(
			await fs.promises.readFile(pkgjsonPath, 'utf8'),
		) as Record<string, unknown>
		pkg.name = relativeToWorkshopRoot(file).replace(/\\|\//g, '_')
		const written = await writeIfNeeded(
			pkgjsonPath,
			`${JSON.stringify(pkg, null, 2)}\n`,
		)
		if (written) {
			console.log(`updated ${path.relative(process.cwd(), pkgjsonPath)}`)
		}
	}
}

async function updateTsconfig() {
	const tsconfig = {
		files: [],
		exclude: ['node_modules'],
		references: appsWithPkgJson
			.map(a => ({
				path: toPosixPath(relativeToWorkshopRoot(a)),
			}))
			.sort((a, b) => a.path.localeCompare(b.path)),
	}
	const written = await writeIfNeeded(
		path.join(workshopRoot, 'tsconfig.json'),
		`${JSON.stringify(tsconfig, null, 2)}\n`,
		{ parser: 'json' },
	)

	if (written) {
		// delete node_modules/.cache
		const cacheDir = path.join(workshopRoot, 'node_modules', '.cache')
		if (exists(cacheDir)) {
			await fs.promises.rm(cacheDir, { recursive: true })
		}
		console.log('all fixed up')
	}
}

async function writeIfNeeded(filepath: string, content: string, _opts?: { parser: string }) {
	const oldContent = await fs.promises.readFile(filepath, 'utf8')
	if (oldContent !== content) {
		await fs.promises.writeFile(filepath, content)
	}
	return oldContent !== content
}
