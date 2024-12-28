// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for subdirectory `/en`
export default defineConfig({
  base: '/en/', // Ensure Vite knows the app is served from '/en/'
  plugins: [react()],
});
