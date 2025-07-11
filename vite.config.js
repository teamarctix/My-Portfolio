import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',         // Accept connections from any IP
    allowedHosts: 'all',     // Allow all external hosts (e.g. *.ngrok-free.app)
  },
})
