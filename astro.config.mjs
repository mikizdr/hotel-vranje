// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://mikizdr.github.io',
    base: '/hotel-vranje', // omit this line if repo is named <username>.github.io

    i18n: {
        defaultLocale: 'sr',
        locales: ['sr', 'en'],
        routing: {
            prefixDefaultLocale: false,
            redirectToDefaultLocale: false,
        },
    },

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [react()],
});
