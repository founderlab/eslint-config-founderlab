var _ = require('lodash')
var airbnb = require('eslint-config-airbnb')

module.exports = _.merge(airbnb, {
  // "extends": "airbnb",
  "rules": {
    "brace-style": [                      // http://eslint.org/docs/rules/brace-style
      2,
      "stroustrup", {
        "allowSingleLine": true
      }
    ],
    "spaced-comment": 0,                  // http://eslint.org/docs/rules/spaced-comment
    "camelcase": 0,                       // http://eslint.org/docs/rules/camelcase
    "padded-blocks": 0,                   // http://eslint.org/docs/rules/padded-blocks
    "no-shadow": 0,                       // http://eslint.org/docs/rules/no-shadow
    "space-infix-ops": 0,                 // http://eslint.org/docs/rules/space-infix-ops
    "indent": [2, 2, {"SwitchCase": 1}],  // http://eslint.org/docs/rules/indent
    "no-console": 0,                      // http://eslint.org/docs/rules/no-console
    "semi": [2, "never"],                 // http://eslint.org/docs/rules/semi
    "no-unexpected-multiline": 2,         // http://eslint.org/docs/rules/no-unexpected-multiline

    // Added with eslint-config-airbnb@16
    "arrow-parens": [2, "as-needed"],
    "consistent-return": 0,
    "prefer-destructuring": 0,
    "newline-per-chained-call": 0,
    "no-param-reassign": 0,
    "no-mixed-operators": 0,
    "eqeqeq": 0,
    "function-paren-newline": 0,
    "global-require": 0,
    "max-len": 0,
    "no-case-declarations": 0,
    "no-return-assign": 0,
    "no-unneeded-ternary": 0,
    "object-curly-newline": 0,
    "object-curly-spacing": [2, "never"],
    "prefer-template": 0,

    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-extraneous-dependencies": 0,

    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
  }
})
