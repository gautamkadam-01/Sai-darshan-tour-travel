import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Sai-darshan-tour-travel/',
  server: {
    port: 5173,
    host: true
  }
});
