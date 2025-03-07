// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://thomasvergne.github.io',
  base: import.meta.env.PROD ? 'donald.css' : undefined,
  vite: {
    plugins: [tailwindcss()],
  },
});
