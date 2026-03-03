import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export function getScriptDir(importMetaUrl: string) {
	return path.dirname(fileURLToPath(importMetaUrl))
}

export function exists(filepath: string) {
	if (!filepath) return false
	try {
		fs.statSync(filepath)
		return true
	} catch {
		return false
	}
}

export async function readDirSorted(dir: string) {
	if (!exists(dir)) return []
	const entries = await fs.promises.readdir(dir)
	return entries.sort((a, b) => a.localeCompare(b))
}

export function uniqueSorted(values: Array<string>) {
	return [...new Set(values)].sort((a, b) => a.localeCompare(b))
}

export function toPosixPath(filepath: string) {
	return filepath.replace(/\\/g, '/')
}
