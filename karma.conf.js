module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.spec.js'
    ],
    exclude: [],
    // preprocessors: {
    //  'src/**/*.spec.js': ['rollup']
    // },
    // rollupPreprocessor: {

    // },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
};
