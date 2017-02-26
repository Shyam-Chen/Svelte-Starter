const { env, noop } =  require('gulp-util');
const { LoaderOptionsPlugin, HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const include = require('posthtml-include');
const extend = require('posthtml-extend');
const mixins = require('posthtml-mixins');

const { SOURCE_ROOT, DIST_ROOT } = require('../constants');
const { APP_CONFIG } = require('./rollup.config');

exports.primary = {
  context: SOURCE_ROOT,
  entry: {
    app: './app.js'
  },
  output: {
    path: DIST_ROOT,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader', options: { minimize: true } },
          'posthtml-loader'
        ]
      },
      {
        test: /\.(css|js|gif|jpeg|jpg|png|svg|json)$/,
        loader: 'rollup-loader',
        exclude: [/node_modules/],
        options: APP_CONFIG
      }
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({
      posthtml() {
        return {
          plugins: [include(), extend(), mixins()]
        };
      }
    }),
    (env.mode === 'dev' ? new HotModuleReplacementPlugin() : noop()),
    (env.mode === 'dev' ? new NamedModulesPlugin() : noop()),  // prints more readable module names in the browser console on HMR updates
    new PrerenderSpaPlugin(DIST_ROOT,
      ['/', '/about', '/contact']
    )
  ]
};
