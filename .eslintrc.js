module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  globals: {
    React: 'writable',
  },
  rules: {
    'linebreak-style': 'off',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'max-len': ['error', { code: 120 }],
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'no-underscore-dangle': 'off',
    'react/require-default-props': 'off',
    camelcase: 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: { multiline: true, minProperties: 8 },
      },
    ],
  },
};
