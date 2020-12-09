const path = require('path')
const resolve = require('@rollup/plugin-node-resolve')
const babel = require('@rollup/plugin-babel')
const inject = require('@rollup/plugin-inject')
const terser = require('rollup-plugin-terser')

module.exports = {
  input: path.resolve('src/app/index.js'),
  plugins: [
    resolve,
    babel.babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],
      plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'el' }]],
    }),
    inject({
      el: path.resolve('src/app/utils/el.js'),
    }),
    terser.terser({
      output: {
        comments: false,
      },
    }),
  ],
}
