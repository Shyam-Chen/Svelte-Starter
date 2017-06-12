export default {
  babelrc: false,
  presets: [
    [
      'latest', {
        es2015: {
          modules: false
        }
      }
    ],
    'flow'
  ],
  plugins: [
    'external-helpers',
    'transform-function-bind',
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
        },
        'rxjs/scheduler': {
          transform: 'rxjs/scheduler/${member}',
          preventFullImport: true,
          skipDefaultConversion: true
        }
      }
    ]
  ],
  exclude: 'node_modules/**'
};
