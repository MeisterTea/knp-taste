module.exports = {
  'root': true,
  'env': {
    'node': true,
    'es6': true
  },
  "plugins": [
    "react"
  ],
  'parser': 'babel-eslint',
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  'rules': {
    "indent": ["error", 2, {"SwitchCase": 1, "ignoredNodes": ["JSXElement"]}],
    "react/jsx-indent": ["error", 2],
    'brace-style': ['error'],
    'curly': ['error', 'multi-line'],
    'quotes': ['error', 'single'],
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'never'],
    "react/jsx-curly-spacing": [2, {"when": "always", "allowMultiline": false}],
    'react/jsx-max-props-per-line': [1, { "maximum": 1 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  'parserOptions': {
    'parser': 'babel-eslint',
    'sourceType': "module",
    'ecmaVersion': 10,
    'ecmaFeatures': {
      'jsx': true,
      'modules': true,
      'experimentalObjectRestSpread': true
    }
  },
  'settings': {
    'react': {
      'pragma': 'React',
      'version': '15.6.1'
    }
  }
}

