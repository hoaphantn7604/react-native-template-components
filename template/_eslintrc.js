module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['off'],
    'react-native/no-inline-styles': ['off'],
    'no-shadow': ['off'],
    'react-hooks/exhaustive-deps': ['off'],
    'react-hooks/rules-of-hooks': ['off'],
    'handle-callback-err': ['off'],
    'react/no-unstable-nested-components': ['off'],
    '@typescript-eslint/no-shadow': ['off'],
  },
};
