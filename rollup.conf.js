const util = require('gulp-util');

const html = require('rollup-plugin-html');
const postcss = require('rollup-plugin-postcss');
const comment = require('postcss-comment');
const modules = require('postcss-modules');
const cssnext = require('postcss-cssnext');
const rucksack = require('rucksack-css');
const cssnano = require('cssnano');
const image = require('rollup-plugin-image');
const json = require('rollup-plugin-json');
const globals = require('rollup-plugin-node-globals');
const builtins = require('rollup-plugin-node-builtins');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
const uglify = require('rollup-plugin-uglify');

let cssExportMap = {};
exports.app = [
  html({
    htmlMinifierOptions: {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true
    }
  }),
  postcss({
    parser: comment,
    plugins: [
      cssnext({
        warnForDuplicates: false
      }),
      rucksack({
        fallbacks: true,
        autoprefixer: true
      }),
      modules({
        getJSON(id, tokens) {
          cssExportMap[id] = tokens;
        }
      }),
      cssnano()
    ],
    getExport(id) {
      return cssExportMap[id];
    }
  }),
  image(),
  json(),
  globals(),
  builtins(),
  resolve({
    jsnext: true, browser: true
  }),
  commonjs(),
  babel({
    exclude: 'node_modules/**'
  }),
  (util.env.type === 'prod' ? uglify() : util.noop())
];

exports.vendor = [
  postcss({ plugins: [cssnano()] }),
  globals(),
  builtins(),
  resolve({ jsnext: true, browser: true }),
  commonjs(),
  replace({ eval: '[eval][0]' }),
  uglify()
];

exports.polyfills = [
  globals(),
  builtins(),
  resolve({ jsnext: true, browser: true }),
  commonjs(),
  uglify()
];
