import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Update this to your GitHub repository name when deploying to GitHub Pages
  // base: '/portfolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});