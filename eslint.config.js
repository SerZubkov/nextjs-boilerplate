module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'lodash', '@typescript-eslint', 'jest'],
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:lodash/canonical',
    'plugin:jest/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        moduleDirectory: ['node_modules', 'pages', 'components', 'types'],
      },
    },
    'import/core-modules': ['ts-optchain'],
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      2,
      {
        useTabs: false,
        tabWidth: 2,
        singleQuote: true,
        semi: true,
        printWidth: 120,
        trailingComma: 'all',
        proseWrap: 'never',
      },
    ],
    'lodash/prefer-lodash-method': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    curly: 1,
  },
  overrides: [
    {
      files: ['**/*.tsx', '**/*.ts'],
      rules: {
        'no-undef': 0,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 2,
        'react/jsx-filename-extension': [
          2,
          {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
          },
        ],
      },
    },
    {
      files: ['**/*.jsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
