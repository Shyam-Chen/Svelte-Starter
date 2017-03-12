const { env, noop } = require('gulp-util');
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const { SOURCE_ROOT, DIST_ROOT } = require('../constants');
const { APP_ROLLUP_CONFIG } = require('./rollup.config');

exports.APP_WEBPACK_CONFIG = {
  context: SOURCE_ROOT,
  entry: {
    app: './app.js',
    vendor: './vendor.js',
    polyfills: './polyfills.js'
  },
  output: {
    path: DIST_ROOT,
    filename: '[name].js'
  },
  devtool: (env.mode === 'dev' ? 'source-map' : noop()),
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader', options: { minimize: true } },
          { loader: 'posthtml-loader', options: { plugins: [require('posthtml-include')()] } }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'postcss-loader', options: { plugins: [require('postcss-cssnext')({ warnForDuplicates: false }), require('rucksack-css')({ autoprefixer: true }), require('cssnano')()] } }
        ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          { loader: 'babel-loader', options: { babelrc: false, presets: ['latest'], plugins: ['transform-function-bind', 'lodash'] }
        }]
      },
      {
        test: /\.(gif|jpeg|jpg|png|svg)$/,
      },
      {
        test: /\.json$/,
      }
    ]
  },
  plugins: [
    (env.mode === 'dev' ? new HotModuleReplacementPlugin() : noop()),
    (env.mode === 'dev' ? new NamedModulesPlugin() : noop()),
    new PrerenderSpaPlugin(
      DIST_ROOT,
      ['/', '/about', '/contact'],
      {
        postProcessHtml(context) {
          const titles = {
            '/': 'Frontend Starter Kit',
            '/about': 'Frontend Starter Kit - About',
            '/contact': 'Frontend Starter Kit - Contact'
          };

          const metas = {
            '/': 'A boilerplate for HTML5, Material, Firebase, Gulp, Webpack, Babel, PostHTML, and PostCSS.',
            '/about': 'About ...',
            '/contact': 'Contact ...'
          };

          return context.html.replace('{{ TITLE_META_SERVICE }}', `
            <title>${titles[context.route]}</title>
            <meta name="description" content="${metas[context.route]}">
          `);
        }
      }
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
