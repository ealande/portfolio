import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 443, // Set the port to 443
    https: true, // Ensure HTTPS is used
  },
});

