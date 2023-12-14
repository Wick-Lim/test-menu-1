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
        property: './src/Property.tsx',
        collect: './src/Collect.tsx',
        inbound: './src/Inbound.tsx',
        'client-inform': './src/ClientInform.tsx',
        marketing: './src/Marketing.tsx',
        sales: './src/Sales.tsx',
        'follow-up': './src/FollowUp.tsx',
        setting: './src/Setting.tsx',
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
});
