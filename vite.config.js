import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size limit to suppress warning if needed
    chunkSizeWarningLimit: 1000, // Increase the limit to 1MB (default is 500KB)
    rollupOptions: {
      output: {
        // Manually split chunks based on certain conditions
        manualChunks(id) {
          // Place libraries from node_modules into a separate 'vendor' chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
