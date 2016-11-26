const babel = require('babel-core/register');

const config = {
  specs: ['./src/**/*.e2e-spec.js'],
  exclude: [],
  onPrepare() {
    babel({ presets: ['latest'] });
    global.webdriver = browser.driver;
    webdriver.ignoreSynchronization = true;
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  },
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  multiCapabilities: [
    {
      'browserName': 'MicrosoftEdge',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      'build': process.env.TRAVIS_BUILD_NUMBER,
      'name': 'Edge'
    }, {
      'browserName': 'safari',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      'build': process.env.TRAVIS_BUILD_NUMBER,
      'name': 'Safari',
      'platform': 'OS X 10.10'
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
  ]
};

exports.config = config;
