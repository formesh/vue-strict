import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    root: fileURLToPath(new URL('./', import.meta.url)),
  },
  resolve: {
    alias: {
      '@repo/utils': fileURLToPath(new URL('../utils/src/index.ts', import.meta.url)),
    },
  },
})
