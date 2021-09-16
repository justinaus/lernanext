module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'next',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
  ],
  plugins: [
    'prettier',
    'react',
    'unused-imports',
    'simple-import-sort',
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': ['warn'],
    'unused-imports/no-unused-imports': ['warn'],
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
};
