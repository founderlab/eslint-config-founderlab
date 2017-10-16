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
    "eqeqeq": 0,                          // http://eslint.org/docs/rules/eqeqeq

    // Added with eslint-config-airbnb@16
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "consistent-return": 0,
    "function-paren-newline": 0,
    "global-require": 0,
    "max-len": 0,
    "newline-per-chained-call": 0,
    "no-case-declarations": 0,
    "no-mixed-operators": 0,
    "no-multi-assign": 0,
    "no-multi-spaces": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 0,
    "no-unused-expressions": 0,
    "object-curly-newline": 0,
    "object-curly-spacing": [2, "never"],
    "prefer-destructuring": 0,
    "prefer-template": 0,
    "quotes": [2, "single", {"allowTemplateLiterals": true}],

    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,

    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
  }
})
