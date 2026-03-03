import path from 'node:path'
import { fileURLToPath } from 'node:url'
import chokidar from 'chokidar'
import { $ } from 'execa'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const here = (...p: Array<string>) => path.join(__dirname, ...p)

const workshopRoot = here('..')

// Watch the exercises directory
const watcher = chokidar.watch(path.join(workshopRoot, 'exercises'), {
	ignored: [
		/(^|[/\\])\./, // ignore dotfiles
		(path: string) => {
			// Only watch directories up to depth 2
			const relativePath = path.slice(workshopRoot.length + 1)
			return relativePath.split('/').length > 4
		},
	],
	persistent: true,
	ignoreInitial: true,
})

const debouncedRun = debounce(run, 200)

// Add event listeners.
watcher
	.on('addDir', (_path: string) => {
		debouncedRun()
	})
	.on('unlinkDir', (_path: string) => {
		debouncedRun()
	})
	.on('error', (error: unknown) => console.log(`Watcher error: ${error}`))

/**
 * Simple debounce implementation
 */
function debounce(fn: (...args: Array<unknown>) => unknown, delay: number) {
	let timer: ReturnType<typeof setTimeout> | null = null
	return (...args: Array<unknown>) => {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fn(...args)
		}, delay)
	}
}

let running = false

async function run() {
	if (running) {
		console.log('still running...')
		return
	}
	running = true
	try {
		await $({
			stdio: 'inherit',
			cwd: workshopRoot,
		})`node ./epicshop/fix.ts`
	} finally {
		running = false
	}
}

console.log('Watching exercises directory for changes...')
console.log('running fix to start...')
run()
