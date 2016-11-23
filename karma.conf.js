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

const sl =
  {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Windows 7'
    },
    sl_edge: {
      base: 'SauceLabs',
      browserName: 'MicrosoftEdge'
    },
    sl_safari: {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.10'
    },
    sl_android: {
      base: 'SauceLabs',
      browserName: 'android'
    },
    sl_iphone: {
      base: 'SauceLabs',
      browserName: 'iphone'
    },
    sl_ie: {
      base: 'SauceLabs',
      browserName: 'internet explorer'
    }
  };

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
        istanbul({ exclude: ['./src/**/*.spec.js'] })
      ]
    },
    reporters: ['mocha', 'coverage', 'saucelabs'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'text-summary' },
        { type: 'json', subdir: '.', file: 'coverage-final.json' },
        { type: 'html' },
        { type: 'lcov' }
      ]
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
  config.sauceLabs = {
    testName: 'Test',
    tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
    build: 'TRAVIS #' + process.env.TRAVIS_BUILD_NUMBER + ' (' + process.env.TRAVIS_BUILD_ID + ')',
    retryLimit: 3,
    startConnect: false,
    recordScreenshots: true,
    recordVideo: true
  };
  config.customLaunchers = sl;
  config.browsers = Object.keys(sl);
  config.captureTimeout = 300000;
  config.browserNoActivityTimeout = 300000;
}

module.exports = (_config) => {
  _config.set(config);
};
