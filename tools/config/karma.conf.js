const { TEST_CONFIG } = require('./rollup.config');

const { TEST_PORT } = require('../constants');

module.exports = (config) => {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.spec.js': ['rollup']  // ['webpack']
    },
    rollupPreprocessor: TEST_CONFIG,
    // webpack: TEST_CONFIG,
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
