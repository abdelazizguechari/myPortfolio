import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase the limit to 1MB (default is 500KB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Place libraries from node_modules into a separate 'vendor' chunk
          }
        },
      },
    },
    // Ensure output directory for Vercel
    outDir: 'dist', // The default output directory is 'dist' for static deployment
  },
  server: {
    host: true, // This ensures Vite listens on all interfaces for local development
    port: 3000, // You can customize the development server port
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Pre-bundle React and ReactDOM if using dynamic imports
  },
  // Configure base URL for Vercel deployment to handle multiple languages
  base: process.env.NODE_ENV === 'production' ? '/3dfolio/' : '/', // Adjust the base path for Vercel
  
  // Handle multi-language routing in the app (adjust if needed for your path structure)
  publicDir: 'public',
});
