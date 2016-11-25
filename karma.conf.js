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
const istanbul = require('rollup-plugin-istanbul');

let cssExportMap = {};
const config = {
  frameworks: ['jasmine'],
  files: [
    './src/**/*.spec.js'
  ],
  exclude: [],
  preprocessors: {
    './src/**/*.spec.js': ['rollup']
  },
  rollupPreprocessor: {
    format: 'iife',
    sourceMap: 'inline',
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
          modules({ getJSON(id, tokens) { cssExportMap[id] = tokens; } }),
          cssnext({ warnForDuplicates: false }),
          rucksack({ fallbacks: true, autoprefixer: true }),
          cssnano()
        ],
        getExport(id) { return cssExportMap[id]; }
      }),
      image(),
      json(),
      globals(),
      builtins(),
      resolve({ jsnext: true, browser: true }),
      commonjs(),
      babel(),
      istanbul({ exclude: ['./src/**/*.spec.js', 'node_modules/**'] })
    ]
  },
  reporters: ['mocha', 'coverage'],
  coverageReporter: {
    reporters: [{ type: 'text-summary' }]
  },
  port: 9876,
  colors: true,
  autoWatch: true,
  customLaunchers: {
    Chrome_no_sandbox: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  },
  browsers: ['Chrome_no_sandbox'],
  singleRun: true,
  concurrency: Infinity
};

if (process.env.TRAVIS) {
  config.browsers = ['Firefox'];
  config.coverageReporter = {
    dir: 'coverage',
    reporters: [
      { type: 'json', subdir: '.', file: 'coverage-final.json' },
      { type: 'html' },
      { type: 'lcov' }
    ]
  };
}

module.exports = (_config) => { _config.set(config); };
