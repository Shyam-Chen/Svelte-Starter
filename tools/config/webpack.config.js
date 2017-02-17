const Prerender = require('prerender-spa-plugin')

const { SOURCE_ROOT, DIST_ROOT } = require('../constants');
const { APP_CONFIG, VENDOR_CONFIG } = require('./rollup.config');

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
    new Prerender(DIST_ROOT, ['/', '/about', '/contact'])
  ]
};

exports.secondary = {
  context: SOURCE_ROOT,
  entry: {
    vendor: './vendor.js',
    polyfills: './polyfills.js'
  },
  output: {
    path: DIST_ROOT,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(css|js)$/,
        loader: 'rollup-loader',
        exclude: [/node_modules/],
        options: VENDOR_CONFIG
      }
    ]
  }
};
