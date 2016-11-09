const SpecReporter = require('jasmine-spec-reporter');

// TODO: History API fallback (CI)
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
  onPrepare() {
    require("babel-core/register")({ presets: ["latest"] });
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: true }));
    global.webdriver = browser.driver;
    browser.ignoreSynchronization = false;
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};
