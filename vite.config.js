import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase the warning limit to 1MB to prevent warnings for large libraries
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Place libraries from node_modules into a separate 'vendor' chunk
          }
        },
      },
    },
    outDir: 'dist', // Default output directory for Vercel static builds
  },
  server: {
    host: true, // Ensure Vite listens on all interfaces for local development
    port: 3000, // You can set this to any desired port for local development
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Pre-bundle React and ReactDOM for faster HMR
  },
  // Configure base URL for production and development
  base: process.env.NODE_ENV === 'production' ? '/3dfolio/' : '/', // Use '/3dfolio/' for production and '/' for development
});
