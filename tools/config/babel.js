export default {
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
  exclude: 'node_modules/**'
};
