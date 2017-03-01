const { TEST_CONFIG, LIB_ROLLUP_CONFIG } = require('./rollup.config');
// const { TEST_WEBPACK_CONFIG } = require('./webpack.config');

const { TEST_PORT } = require('../constants');

module.exports = (config) => {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    files: [
      // { pattern: 'src/polyfills.js', included: false, watched: false },
      // { pattern: 'src/vendor.js', included: false, watched: false },
      'src/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      // 'src/polyfills.js': ['rollup'],
      // 'src/vendor.js': ['rollup'],
      'src/**/*.spec.js': ['rollup']  // ['webpack']
    },
    rollupPreprocessor: TEST_CONFIG,  // LIB_ROLLUP_CONFIG,
    // webpack: TEST_CONFIG,  // TEST_WEBPACK_CONFIG,
    reporters: ['mocha'],
    port: TEST_PORT,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // customLaunchers: {
    //   Chrome_no_sandbox: {
    //     base: 'Chrome',
    //     flags: ['--no-sandbox']
    //   }
    // },
    // browsers: ['Chrome_no_sandbox'],
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });

  // if (process.env.TRAVIS) {
  //   config.browsers = ['Firefox'];
  // }
};
