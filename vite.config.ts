import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/mestizo-web/' : '/',
  build: {
    // Multi-page: the current site (index.html) stays untouched; the parallel
    // redesign lives at its own entry (redesign.html → src/redesign/*).
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        redesign: fileURLToPath(new URL('./redesign.html', import.meta.url)),
      },
    },
  },
})
