import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  base: '',
  build: {
    outDir: 'build',
  },
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './test/vite.setup.ts',
  },
  server: {
    port: 3000,
  },
});
