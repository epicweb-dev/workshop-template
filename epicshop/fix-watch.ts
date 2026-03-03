import path from 'node:path'
import chokidar from 'chokidar'
import { $ } from 'execa'
import { getScriptDir } from './script-utils.ts'

const __dirname = getScriptDir(import.meta.url)
const here = (...p: Array<string>) => path.join(__dirname, ...p)

const workshopRoot = here('..')

// Watch the app roots.
const watcher = chokidar.watch(
	[path.join(workshopRoot, 'exercises'), path.join(workshopRoot, 'extra')],
	{
		ignored: [/(^|[/\\])\./], // ignore dotfiles
		depth: 2,
		persistent: true,
		ignoreInitial: true,
	},
)
const debouncedRun = debounce(queueFixRun, 200)

let running = false
let pending = false

async function queueFixRun() {
	if (running) {
		pending = true
		return
	}

	running = true
	try {
		do {
			pending = false
			await $({
				stdio: 'inherit',
				cwd: workshopRoot,
			})`node ./epicshop/fix.ts`
		} while (pending)
	} finally {
		running = false
	}
}

// Add event listeners.
watcher
	.on('addDir', () => {
		debouncedRun()
	})
	.on('unlinkDir', () => {
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

console.log('Watching exercises and extra directories for changes...')
console.log('running fix to start...')
queueFixRun()
