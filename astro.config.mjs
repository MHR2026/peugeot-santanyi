import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'http://www.peugeot-santanyi.com',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
