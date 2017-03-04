const { env, noop } = require('gulp-util');
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const { SOURCE_ROOT, DIST_ROOT } = require('../constants');
const { APP_ROLLUP_CONFIG } = require('./rollup.config');

exports.APP_WEBPACK_CONFIG = {
  context: SOURCE_ROOT,
  entry: {
    app: './app.js'
  },
  output: {
    path: DIST_ROOT,
    filename: '[name].js'
  },
  devtool: (env.mode === 'dev' ? 'source-map' : noop()),
  module: {
    rules: [
      {
        test: /\.(html|css|js|gif|jpeg|jpg|png|svg|json)$/,
        loader: 'rollup-loader',
        exclude: [/node_modules/],
        options: APP_ROLLUP_CONFIG
      }
    ]
  },
  plugins: [
    (env.mode === 'dev' ? new HotModuleReplacementPlugin() : noop()),
    (env.mode === 'dev' ? new NamedModulesPlugin() : noop()),
    new PrerenderSpaPlugin(DIST_ROOT,
      ['/', '/about', '/contact']
    )
  ]
};

exports.TEST_WEBPACK_CONFIG = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(html|css|js|gif|jpeg|jpg|png|svg|json)$/,
        loader: 'rollup-loader',
        exclude: [/node_modules/],
        options: APP_ROLLUP_CONFIG
      }
    ]
  }
};
