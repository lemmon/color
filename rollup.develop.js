import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/app/index.js',
  output: {
    file: 'develop/build/bundle.js',
    format: 'iife',
  },
  plugins: [resolve()],
}
