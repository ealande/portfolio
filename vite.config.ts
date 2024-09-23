import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  //change port for production
  plugins: [react()],
  preview: {
    port: 443,
  },
  // for dev
  server: {
    port: 3000,
  },
});
