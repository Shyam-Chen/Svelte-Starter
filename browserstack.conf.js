const babel = require('babel-core/register');

// OK
exports.config = {
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
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  // commonCapabilities: {
  capabilities: {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME,
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'E2E Tests',
    'browserstack.local': true,
    'browserstack.debug': 'true',
    'os': 'Windows',
    'os_version': '10',
    'browserName': 'Chrome',
    'browser_version': '54.0',
    'resolution': '1280x1024'
  }// ,
  // multiCapabilities: [
  //   {
  //     'os': 'Windows',
  //     'os_version': '10',
  //     'browserName': 'Edge',
  //     'browser_version': '13.0',
  //     'resolution': '1280x1024'
  //   }, {
  //     'os': 'OS X',
  //     'os_version': 'Yosemite',
  //     'browserName': 'Safari',
  //     'browser_version': '8.0',
  //     'resolution': '1280x1024'
  //   }, {
  //     'browserName': 'android',
  //     'platform': 'ANDROID',
  //     'device': 'Google Nexus 5'
  //   }, {
  //     'browserName': 'iPhone',
  //     'platform': 'MAC',
  //     'device': 'iPhone 6'
  //   }
  // ]
};

// exports.config.multiCapabilities.forEach((caps) => {
//   for(let i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
// });
