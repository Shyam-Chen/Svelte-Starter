const phantomjs = require('phantomjs-prebuilt');
const babel = require('babel-core/register');
const SpecReporter = require('jasmine-spec-reporter');

const config = {
  // directConnect: true,
  specs: [
    'src/**/*.e2e-spec.js'
  ],
  exclude: [],
  // capabilities: {
  //   'browserName': 'chrome',
  //   'chromeOptions': {
  //     'args': ['no-sandbox']
  //   }
  // },
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': phantomjs.path,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
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

// if (process.env.TRAVIS) {
//   config.capabilities = {
//     browserName: 'firefox'
//   };
// }

exports.config = config;
