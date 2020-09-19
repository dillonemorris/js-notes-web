module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'react-app',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
  ],
  globals: {
    env: 'readonly',
  },
  ignorePatterns: ['node_modules/'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        varsIgnorePattern: '^_',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    curly: 'off',
    'no-shadow': 'off',
    'react-native/no-inline-styles': 'off',
    'arrow-parens': [2, 'always'],
    'comma-dangle': [
      // Let Prettier take care of comma placement
      'error',
      {
        arrays: 'ignore',
        objects: 'ignore',
        imports: 'ignore',
        exports: 'ignore',
        functions: 'ignore',
      },
    ],
  },
}
