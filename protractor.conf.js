const SpecReporter = require('jasmine-spec-reporter');
const babel = require('babel-core/register');

const config = {
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
    webdriver.manage().window().setSize(1280, 1024);
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};

exports.config = config;
