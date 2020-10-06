module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    es6: true,
  },

  'extends': 'webtrinkets',

  rules: {
    'no-multi-spaces': 'off', // Allow liberal formatting of imports/exports
    'import/no-anonymous-default-export': 'off', // Used for Plugin Initialization
    'import/max-dependencies': 'off', // index.js should be the sole importer of dependencies
  },
}
