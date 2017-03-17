const { TEST_CONFIG } = require('./rollup.config');
const { TEST_PORT } = require('../constants');

module.exports = (config) => {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'public/polyfills.js', included: false, watched: false },
      { pattern: 'public/vendor.js', included: false, watched: false },
      'src/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.spec.js': ['rollup']
    },
    rollupPreprocessor: TEST_CONFIG,
    reporters: ['mocha'],
    port: TEST_PORT,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
};
