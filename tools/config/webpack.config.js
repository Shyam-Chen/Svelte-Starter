const Prerender = require('prerender-spa-plugin')

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
        test: /\.(html|css|js|gif|jpeg|jpg|png|svg|json)$/,
        loader: 'rollup-loader',
        exclude: [/node_modules/],
        options: APP_CONFIG
      }
    ]
  },
  plugins: [
    new Prerender(
      DIST_ROOT,
      ['/', '/about', '/contact'],
      {
        postProcessHtml(context) {
          const titles = {
            '/': 'Frontend-Starter-Kit',
            '/about': 'Frontend-Starter-Kit - About',
            '/contact': 'Frontend-Starter-Kit - Contact'
          };

          return context.html.replace(
            /<title>[^<]*<\/title>/i,
            `<title>${titles[context.route]}</title>`
          );
        }
      }
    )
  ]
};
