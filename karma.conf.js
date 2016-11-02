// ToDo: karma-rollup-plugin
module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*.js'
    ],
    exclude: [],
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    autoWatch: false,
    /*customLaunchers: {
      Chrome_no_sandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },*/
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
};
