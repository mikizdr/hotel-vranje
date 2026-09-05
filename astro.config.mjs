// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['sr', 'en'],
    defaultLocale: 'sr'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});