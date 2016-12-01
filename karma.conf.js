const plugins = require('./rollup.conf');

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: ['./src/**/*.spec.js'],
    exclude: [],
    preprocessors: {
      './src/**/*.spec.js': ['rollup']
    },
    rollupPreprocessor: {
      format: 'iife',
      sourceMap: 'inline',
      plugins
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    customLaunchers: {
      Chrome_no_sandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    // browsers: ['Chrome_no_sandbox'],
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });

  // if (process.env.TRAVIS) {
  //   config.browsers = ['Firefox'];
  // }
};
