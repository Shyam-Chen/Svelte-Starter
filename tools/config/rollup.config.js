import { join } from 'path';
import { env, noop } from 'gulp-util';
import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import comment from 'postcss-comment';
import postcssimport from 'postcss-import';
import cssnext from 'postcss-cssnext';
import rucksack from 'rucksack-css';
import modules from 'postcss-modules';
import cssnano from 'cssnano';
import image from 'rollup-plugin-image';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

import { SOURCE_ROOT } from '../constants';
import { reactivex, lodash } from '../utils';

export const PRIMARY_CONFIG = {
  format: 'iife',
  context: 'window',
  plugins: (() => {
    const htmlplugin = () => {
      return html({
        htmlMinifierOptions: {
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true
        }
      });
    };

    const cssplugin = () => {
      const cssExportMap = {};
      return postcss({
        parser: comment,
        plugins: [
          postcssimport(),
          cssnext({ warnForDuplicates: false }),
          rucksack({ autoprefixer: true }),
          modules({ getJSON(id, tokens) { cssExportMap[id] = tokens; } }),  // @deprecated, TODO: posthtml-bem
          cssnano()
        ],
        getExport(id) { return cssExportMap[id]; }
      });
    };

    return [
      htmlplugin(),  // @deprecated, TODO: rollup-plugin-posthtml
      cssplugin(),
      image(),  // @deprecated, TODO: posthtml-inline-assets
      json(),
      lodash(),
      reactivex(),
      babel({
        babelrc: false,
        presets: [['latest', { es2015: { modules: false } }]],
        plugins: ['external-helpers', 'transform-function-bind', [
          'transform-imports', {
            'lodash': {
              transform: 'lodash/${member}',
              preventFullImport: true
            },
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
        ]],
        exclude: 'node_modules/**'
      }),
      globals(),
      builtins(),
      resolve({ jsnext: true, browser: true }),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/immutable/dist/immutable.js': Object.keys(require('immutable'))
        }
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify(env.mode === 'prod' ? 'production' : 'development') }),
      (env.mode === 'prod' ? uglify() : noop())
    ];
  })()
};

export const SECONDARY_CONFIG = {
  format: 'es',
  context: 'window',
  plugins: [
    postcss({ plugins: [cssnano()] }),
    babel({
      babelrc: false,
      presets: [['latest', { es2015: { modules: false } }]],
      plugins: ['external-helpers'],
      exclude: 'node_modules/**'
    }),
    globals(),
    builtins(),
    resolve({ jsnext: true, browser: true }),
    commonjs({ include: 'node_modules/**' }),
    replace({ eval: '[eval][0]' }),
    uglify()
  ]
};

export const APP_CONFIG = Object.assign({}, PRIMARY_CONFIG, {
  entry: join(SOURCE_ROOT, 'app.js'),
  sourceMap: env.mode === 'dev' && true
});

export const TEST_CONFIG = Object.assign({}, PRIMARY_CONFIG, {
  sourceMap: 'inline'
});

export const POLYFILLS_CONFIG = Object.assign({}, SECONDARY_CONFIG, {
  entry: join(SOURCE_ROOT, 'polyfills.js')
});

export const VENDOR_CONFIG = Object.assign({}, SECONDARY_CONFIG, {
  entry: join(SOURCE_ROOT, 'vendor.js')
});
