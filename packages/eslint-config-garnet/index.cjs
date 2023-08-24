module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    globals: {
        jsx: true,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/stylistic',
        'plugin:prettier/recommended',
        'plugin:compat/recommended',
    ],
    plugins: [
        '@typescript-eslint',
        'import',
        'prettier',
        'node',
        'promise',
        'react',
        'react-hooks',
        'compat',
    ],
    rules: {
        'prettier/prettier': ['error', { singleQuote: true, semi: true }],
        'react-hooks/rules-of-hooks': 'error',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx', '.tsx', '.mdx'],
            },
        ],
        'compat/compat': 'error',
    },
    overrides: [
        {
            files: ['*rc.js', '*.config.js', '*.cjs'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
            },
        },
    ],
};
