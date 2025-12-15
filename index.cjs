const { defineConfig } = require('eslint/config');
const react = require('eslint-plugin-react');
const prettier = require('eslint-config-prettier');
const unusedImports = require('eslint-plugin-unused-imports');

module.exports = defineConfig([
    {
        files: ['**/*.{js,jsx,ts,tsx}'],

        languageOptions: {
            parser: require('@typescript-eslint/parser'),
            ecmaVersion: 13,
            sourceType: 'module',
        },

        plugins: {
            react,
            prettier,
            'unused-imports': unusedImports,
        },

        rules: {
            'react/button-has-type': 'off',
            'no-plusplus': 'off',
            'no-nested-ternary': 'off',
            'react/jsx-key': 'error',
            'brace-style': [
                'error',
                '1tbs',
                {
                    allowSingleLine: false,
                },
            ],

            curly: ['error', 'all'],
            'max-len': [
                'error',
                {
                    code: 120,
                    ignoreTemplateLiterals: true,
                },
            ],

            'no-underscore-dangle': [
                'error',
                {
                    allow: ['_env_'],
                },
            ],

            'react/destructuring-assignment': 'off',

            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },
            ],

            'react/jsx-no-useless-fragment': [
                'error',
                {
                    allowExpressions: true,
                },
            ],

            'react/jsx-props-no-spreading': 'off',
            'react/no-array-index-key': 'off',
            'react/prop-types': 'off',
            'react/require-default-props': 'off',

            // 🔴 errors on unused imports
            'unused-imports/no-unused-imports': 'error',

            // 🟡 optional: unused variables, but allow `_`
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
]);