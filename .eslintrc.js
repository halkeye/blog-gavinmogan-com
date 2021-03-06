module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "extends": [
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended"
  ],
  "plugins": [
    "babel",
    "import",
    "jest",
    "jsx-a11y",
    "promise",
    "react",
    "standard"
  ],
  "settings": {
    'import/extensions': [ '.js', '.jsx' ],
    'import/resolver': {'node': {'extensions': ['.js', '.jsx']}},
    "react": { "version": "detect" },
    "linkComponents": [
      {"name": "Link", "linkAttribute": "to"}
    ]
  },
  "rules": {
    "semi": [2, "always"],
    "react/jsx-no-undef": ["error"],
    "no-undef": ["error"],
    "no-var": "error",
    "no-func-assign": "error",
    "no-class-assign": "error",
    "import/no-cycle": "error",
    "import/no-self-import": "error",
    "import/no-absolute-path": "error",
    "import/no-webpack-loader-syntax": "error",
    "import/no-mutable-exports": "error",
    "import/no-duplicates": "error",
    // "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "to" ] } ],
    "babel/new-cap": 1,
    "babel/no-invalid-this": 1,
    "babel/semi": [2, "always"],
    "babel/no-unused-expressions": 1,
    "babel/valid-typeof": 1,
    "react/prefer-stateless-function": "off",
    "react/no-children-prop": "error",
    "react/prop-types": "off",
    "react/no-danger": "off"
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  }
}
