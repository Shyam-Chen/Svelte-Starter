const { TEST_PORT } = require('../constants');
const { TEST_CONFIG, SECONDARY_CONFIG } = require('./rollup');

module.exports = config => {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'src/polyfills.js', watched: false },
      { pattern: 'src/vendor.js', watched: false },
      'src/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'src/polyfills.js': ['prerollup'],
      'src/vendor.js': ['prerollup'],
      'src/**/*.spec.js': ['rollup']
    },
    prerollupPreprocessor: SECONDARY_CONFIG,
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
