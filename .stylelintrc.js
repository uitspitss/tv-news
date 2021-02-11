module.exports = {
  ignoreFiles: ['**/node_modules/**'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
    'stylelint-config-styled-components',
  ],
  rules: {
    'string-quotes': 'single',
    // css-in-js だとコメントアウトも難しいので一旦外す（ indentation は eslint に任せる）
    // indentation: [2],
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['/.+/'],
        ignoreFunctions: ['/.+/'],
      },
    ],
    'declaration-bang-space-before': 'never',
    'no-descending-specificity': null,
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
  },
};
