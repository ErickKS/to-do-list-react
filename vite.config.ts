import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://erickks.github.io/to-do-list-react",
  build: {
    outDir: 'build'
  },
})