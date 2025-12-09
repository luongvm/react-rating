import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig(({ command, mode }) => {
  // Development mode for example
  if (command === 'serve') {
    return {
      plugins: [react()],
      root: 'example',
      server: {
        port: 3000,
      },
    };
  }

  // Build mode for library
  return {
    plugins: [
      react(),
      dts({
        include: ['src'],
        outDir: 'dist',
      }),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'ReactRatingFloat',
        formats: ['es'],
        fileName: () => 'react-rating-float.js',
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
      },
    },
  };
});
