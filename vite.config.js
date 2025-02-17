import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "b3e4-5-82-187-4.ngrok-free" // ngrok URL here
    ]
  }
})
