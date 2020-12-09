import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import inject from '@rollup/plugin-inject'

export default {
  input: 'src/app/index.js',
  output: {
    file: 'develop/build/bundle.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
      plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'el' }]],
    }),
    inject({
      el: path.resolve('src/app/utils/el.js'),
    }),
  ],
}
