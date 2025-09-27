import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        ignores: [
            'node_modules/**',
            '.next/**',
            'out/**',
            'build/**',
            'next-env.d.ts',
        ],
    },
    {
        plugins: {
            react: compat.plugins.react,
            '@typescript-eslint': compat.plugins['@typescript-eslint'], // If using TypeScript
            prettier: compat.plugins.prettier,
        },
        rules: {
            'prettier/prettier': 'error',
            // Add any other custom ESLint rules here
        },
    },
];

export default eslintConfig;
