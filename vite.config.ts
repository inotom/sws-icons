/** @prettier */

import { defineConfig } from 'vite';
import { resolve } from 'path';
import banner from 'vite-plugin-banner';
import pkg from './package.json';

const copyright = `/*! ${pkg.name} v${pkg.version} ${pkg.author} | ${pkg.license} License */`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [banner(copyright)],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SwsIcons',
      fileName: (format: string): string => {
        switch (format) {
          case 'umd':
            return 'sws-icons.umd.js';
          default:
            return 'sws-icons.js';
        }
      },
      formats: ['es', 'umd'],
    },
  },
});
