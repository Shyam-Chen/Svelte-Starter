const SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  specs: [
    './src/**/*.e2e-spec.js'
  ],
  exclude: [],
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs-prebuilt').path,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },
  baseUrl: 'http://localhost:9876/',
  onPrepare() {
    jasmine.getEnv()
      .addReporter(new SpecReporter({ displayStacktrace: true }));
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};
