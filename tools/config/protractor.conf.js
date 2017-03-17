const phantomjs = require('phantomjs-prebuilt');
const babel = require('babel-register');
const { SpecReporter } = require('jasmine-spec-reporter');

const { TEST_PORT } = require('../constants');

exports.config = {
  specs: [
    'src/**/*.e2e-spec.js'
  ],
  exclude: [],
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': phantomjs.path,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },
  baseUrl: `http://localhost:${TEST_PORT}/`,
  onPrepare() {
    babel({ presets: ['latest'] });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    global.webdriver = browser.driver;
    webdriver.ignoreSynchronization = true;
    webdriver.manage().window().setSize(1280, 1024);
    global.browserGet = (url = '/') => webdriver.get(`http://localhost:${TEST_PORT}${url}`);
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};
