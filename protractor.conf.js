const SpecReporter = require('jasmine-spec-reporter');
/// const phantomjs = require('phantomjs-prebuilt');
const babel = require('babel-core/register');

exports.config = {
  directConnect: true,
  specs: [
    './src/**/*.e2e-spec.js'
  ],
  exclude: [],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  },
  baseUrl: 'http://localhost:9876/',
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
