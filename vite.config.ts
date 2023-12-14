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
        app: './src/App.tsx',
        service: './src/Service.tsx',
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
