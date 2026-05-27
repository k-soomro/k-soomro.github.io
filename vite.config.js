import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change base to your GitHub repo name when deploying:
  // base: '/your-repo-name/',
  build: {
    outDir: 'docs',
  },
})
