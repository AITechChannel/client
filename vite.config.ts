import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// @ts-ignore
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

// https://vitejs.dev/config/
export default defineConfig({
  //config alias @
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
});
