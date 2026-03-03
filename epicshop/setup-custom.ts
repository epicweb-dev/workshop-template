import path from 'node:path'
import {
	getApps,
	isProblemApp,
	setPlayground,
} from '@epic-web/workshop-utils/apps.server'
import { warm } from 'epicshop/warm'
import fsExtra from 'fs-extra'

await warm()

const allApps = await getApps()
const problemApps = allApps.filter(isProblemApp)

if (!process.env.SKIP_PLAYGROUND) {
	const firstProblemApp = problemApps[0]
	if (firstProblemApp) {
		console.log('🛝  setting up the first problem app...')
		const playgroundPath = path.join(process.cwd(), 'playground')
		if (await fsExtra.exists(playgroundPath)) {
			console.log('🗑  deleting existing playground app')
			await fsExtra.remove(playgroundPath)
		}
		try {
			await setPlayground(firstProblemApp.fullPath)
			console.log('✅ first problem app set up')
		} catch (error) {
			console.error(error)
			throw new Error('❌  first problem app setup failed')
		}
	}
}
