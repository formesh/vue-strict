import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const packageRoot = resolve(__dirname, '..')
const srcRoot = resolve(packageRoot, 'src')
const distRoot = resolve(packageRoot, 'dist')

const assetDirs = ['components', 'icons']
for (const dir of assetDirs) {
  const from = resolve(srcRoot, dir)
  const to = resolve(distRoot, dir)
  if (!existsSync(from)) continue
  mkdirSync(to, { recursive: true })
  cpSync(from, to, { recursive: true })
}
