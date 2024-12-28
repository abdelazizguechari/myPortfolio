import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for static deployment
    emptyOutDir: true, // Clears the output folder before each build
    chunkSizeWarningLimit: 1000, // Increase chunk size warning threshold to 1000 KB (1 MB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'; // Separate React and ReactDOM into their own chunk
            }
            if (id.includes('i18next')) {
              return 'i18n-vendor'; // Separate i18next into its own chunk
            }
            return 'vendor'; // Default chunk for other node_modules
          }
        },
      },
    },
  },
  server: {
    host: true, // Ensures Vite listens on all interfaces for local development
    port: 3000, // Customize the development server port
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Shorten imports for cleaner paths
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'i18next', 'react-i18next'], // Pre-bundle frequently used libraries
  },
  base: '/', // Base URL for production deployment (use '/' if deploying to the root domain)
});
