import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }// this is for proxying the request to the backend server running on port 3000
    // when we make a request to /api it will be forwarded to the backend server
    // so in the frontend we can use /api/jokes to get the jokes from the backend
    // this is useful in development when the frontend and backend are running on different ports
  },
  plugins: [react()],
})
