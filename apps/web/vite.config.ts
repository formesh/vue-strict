import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@repo/ui': fileURLToPath(new URL('../../packages/ui/src', import.meta.url)),
      '@repo/utils': fileURLToPath(new URL('../../packages/utils/src', import.meta.url)),
      '@repo/ai': fileURLToPath(new URL('../../packages/ai/src', import.meta.url)),
    },
  },
  server: {
    fs: {
      allow: ['../..'],
    },
  },
})
