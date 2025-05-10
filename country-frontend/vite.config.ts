import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:7059',
        changeOrigin: true,
        secure: false,  // Needed for self-signed certs
        rewrite: (path) => path 
      }
    }
  }
})