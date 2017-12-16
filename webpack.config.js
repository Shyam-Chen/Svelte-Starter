const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = ({ prod = false } = {}) => ({
  context: join(__dirname, 'src'),
  entry: {
    polyfills: './polyfills.js',
    vendor: './vendor.js',
    app: './app.js'
  },
  output: {
    path: join(__dirname, 'build'),
    filename: prod ? '[name].[hash].js' : '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                [
                  'env', {
                    modules: false,
                    targets: {
                      browsers: ['last 2 versions']
                    }
                  }
                ],
                'flow'
              ],
              plugins: [
                'external-helpers',
                'transform-function-bind',
                'transform-object-rest-spread',
                [
                  'babel-plugin-root-import', [
                    {
                      rootPathPrefix: '~',
                      rootPathSuffix: 'src'
                    }
                  ]
                ],
                [
                  'transform-imports', {
                    'lodash': {
                      transform: 'lodash/${member}',
                      preventFullImport: true
                    },
                    'rxjs': {
                      transform: 'rxjs/${member}',
                      preventFullImport: true,
                      skipDefaultConversion: true
                    },
                    'rxjs/observable': {
                      transform: 'rxjs/observable/${member}',
                      preventFullImport: true,
                      skipDefaultConversion: true
                    },
                    'rxjs/operator': {
                      transform: 'rxjs/operator/${member}',
                      preventFullImport: true,
                      skipDefaultConversion: true
                    }
                  }
                ]
              ],
              include: [
                'node_modules/@material/**',
                join(__dirname, 'src')
              ]
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ].filter(Boolean)
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: false
    }),
    new CopyWebpackPlugin([
      'assets/images/favicon.ico'
    ]),
    prod && new UglifyJSPlugin({ sourceMap: false }),
    !prod && new webpack.NamedModulesPlugin(),
    !prod && new webpack.HotModuleReplacementPlugin()
  ].filter(Boolean),
  devServer: {
    contentBase: join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8000
  },
  devtool: 'source-map'
});
