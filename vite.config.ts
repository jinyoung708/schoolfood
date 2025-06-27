import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '@images': path.resolve(__dirname, './public/images'),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // ['log', 'info'] console remove settings when true
        drop_debugger: false,
      },
    },
  },
  define: {
    // enviroment variables
  },
  server: {
    // Development server port
    port: 5173,
    cors: true,
  },
});
