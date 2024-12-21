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
  },
  server: {
    host: true, // This ensures Vite listens on all interfaces for local development
  },
  optimizeDeps: {
    // This is helpful if you are using dynamic imports and want Vite to pre-bundle dependencies
    include: ['react', 'react-dom'],
  },
  // Configure base URL for Vercel deployment
  base: process.env.NODE_ENV === 'production' ? '/your-app-name/' : '/',
});
