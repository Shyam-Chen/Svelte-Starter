export default {
  babelrc: false,
  presets: [
    [
      'latest', {
        es2015: {
          modules: false
        }
      }
    ]
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
        // not yet
        'rxjs': {
          transform: 'rxjs/${member}',
          preventFullImport: true
        },
        'rxjs/observable': {
          transform: 'rxjs/observable/${member}',
          preventFullImport: true
        },
        'rxjs/operator': {
          transform: 'rxjs/operator/${member}',
          preventFullImport: true
        },
        'rxjs/scheduler': {
          transform: 'rxjs/scheduler/${member}',
          preventFullImport: true
        }
      }
    ]
  ],
  exclude: 'node_modules/**'
};
