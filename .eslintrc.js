module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    es6: true,
  },

  'extends': 'webtrinkets',

  rules: {
    // Anonymous default export is used for initilization of plugins
    'import/no-anonymous-default-export': 'off',
  },
}
