// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://donald-components.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
