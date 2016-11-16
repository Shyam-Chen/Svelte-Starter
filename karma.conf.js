const html = require('rollup-plugin-html');

const postcss = require('rollup-plugin-postcss');
const modules = require('postcss-modules');
const cssnext = require('postcss-cssnext');
const rucksack = require('rucksack-css');
const extend = require('postcss-extend');
const comment = require('postcss-comment');
const conditionals = require('postcss-conditionals');
const forFromTo = require('postcss-for');
const eachIn = require('postcss-each');
const cssnano = require('cssnano');

const image = require('rollup-plugin-image');
const json = require('rollup-plugin-json');

const babel = require('rollup-plugin-babel');
const globals = require('rollup-plugin-node-globals');
const builtins = require('rollup-plugin-node-builtins');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

let cssExportMap = {};
module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.spec.js': ['rollup']
    },
    rollupPreprocessor: {
      format: 'iife',
      plugins: [
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
            modules({
              getJSON(id, tokens) {
                cssExportMap[id] = tokens;
              }
            }),
            cssnext({ warnForDuplicates: false }),
            rucksack({ fallbacks: true, autoprefixer: true }),
            extend(),
            conditionals(),
            forFromTo(),
            eachIn(),
            cssnano()
          ],
          getExport(id) {
            return cssExportMap[id];
          }
        }),
        json(),
        image(),
        globals(),
        builtins(),
        resolve({ jsnext: true, browser: true }),
        commonjs(),
        babel()
      ]
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
};
