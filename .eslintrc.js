module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': [0]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
