// test/transformer.js
module.exports = require('babel-jest').createTransformer({
  presets: [
    '@babel/react',
    '@babel/env',
    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: ['>0.25%', 'not dead']
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-class-properties',
    'remove-graphql-queries'
  ]
});
