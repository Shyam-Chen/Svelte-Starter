const SpecReporter = require('jasmine-spec-reporter');
const phantomjs = require('phantomjs-prebuilt');
const babel = require('babel-core/register');

exports.config = {
  specs: [
    './src/**/*.e2e-spec.js'
  ],
  exclude: [],
  capabilities: {
    'browserName': 'chrome',
    'phantomjs.binary.path': phantomjs.path,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },
  onPrepare() {
    babel({ presets: ['latest'] });
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: true }));
    global.webdriver = browser.driver;
    webdriver.ignoreSynchronization = true;
    webdriver.manage().window().setSize(1366, 768);
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};
