import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://test-menu-1.vercel.app/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        service: './src/Service.tsx'
      },
      output: {
        entryFileNames: `[name].x-inbound.js`,
        chunkFileNames: `[name].x-inbound.js`,
        assetFileNames: `[name].x-inbound.[ext]`
      }
    }
  }
});
