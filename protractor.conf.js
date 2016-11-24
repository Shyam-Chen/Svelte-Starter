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

/*if (process.env.TRAVIS) {
  config.directConnect = false;
  config.capabilities = false;
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  config.multiCapabilities = [
    {
      'browserName': 'firefox',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      'build': process.env.TRAVIS_BUILD_NUMBER,
      'name': 'Firefox'
    }, {
      'browserName': 'MicrosoftEdge',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      'build': process.env.TRAVIS_BUILD_NUMBER,
      'name': 'Edge'
    }, {
      'browserName': 'safari',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      'build': process.env.TRAVIS_BUILD_NUMBER,
      'name': 'Safari'
    }, {
      'browserName': 'internet explorer',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      'build': process.env.TRAVIS_BUILD_NUMBER,
      'name': 'IE'
    },{
      'browserName': 'android',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      'build': process.env.TRAVIS_BUILD_NUMBER,
      'name': 'Android'
    }, {
      'browserName': 'iphone',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      'build': process.env.TRAVIS_BUILD_NUMBER,
      'name': 'iOS'
    }
  ];
}*/

exports.config = config;
