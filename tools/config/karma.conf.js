const rollupConfig = require('./rollup.config');

module.exports = (config) => {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    files: [
      // { pattern: 'public/polyfills.js', included: false, watched: false },
      // { pattern: 'public/vendor.js', included: false, watched: false },
      'src/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.spec.js': ['rollup']
    },
    rollupPreprocessor: rollupConfig.TEST_CONFIG,
    reporters: ['mocha'],
    port: 9876,
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
