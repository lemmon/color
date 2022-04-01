const postcssImport = require('postcss-import')
const postcssPresetEnv = require('postcss-preset-env')
const postcssApplyClass = require('postcss-apply-class')
const cssnano = require('cssnano')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 0,
    }),
    postcssApplyClass(),
    !dev &&
      cssnano({
        preset: 'default',
      }),
  ],
}
