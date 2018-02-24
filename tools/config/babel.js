import { join } from 'path';

import { SOURCE_ROOT } from '../env';

export const BABEL_CONFIG_APP = {
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
    join(SOURCE_ROOT, '**')
  ]
};

export const BABEL_CONFIG_TEST = Object.assign(
  {},
  BABEL_CONFIG_APP,
  {
    plugins: [
      ...BABEL_CONFIG_APP.plugins,
      [
        'istanbul', {
          'exclude': [
            'node_modules/**',
            join(SOURCE_ROOT, '**/*.spec.js')
          ]
        }
      ]
    ]
  }
);
