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
  }
})
