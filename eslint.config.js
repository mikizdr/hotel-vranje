import tsParser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
    // Astro recommended base config
    ...eslintPluginAstro.configs.recommended,

    // Astro files
    {
        files: ['**/*.astro'],
        languageOptions: {
            parser: eslintPluginAstro.parser, // ✅ use the imported name
        },
        plugins: {
            astro: eslintPluginAstro,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'astro/no-unused-css-selector': 'warn',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },

    // TypeScript/JavaScript files
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: tsParser,
        },
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },
];
