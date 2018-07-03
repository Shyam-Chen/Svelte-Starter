import { join } from 'path';

import { SOURCE_ROOT } from '../constants';

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
