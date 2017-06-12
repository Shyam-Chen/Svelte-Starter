import { join } from 'path';
import { env, noop } from 'gulp-util';

// import posthtml from 'rollup-plugin-posthtml-template';
import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import buble from 'rollup-plugin-buble';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

import cssnano from 'cssnano';
// import { minify } from 'uglify-js-harmony';

// import POSTHTML_CONFIG from './posthtml';
import POSTCSS_CONFIG from './postcss';
import BABEL_CONFIG from './babel';

import { SOURCE_ROOT } from '../constants';
import { lodash, reactivex } from '../utils';

export const PRIMARY_CONFIG = {
  format: 'iife',
  context: 'window',
  plugins: [
    // posthtml(POSTHTML_CONFIG),
    html({
      htmlMinifierOptions: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      }
    }),
    postcss(POSTCSS_CONFIG),
    url({ limit: 32 * 1024 }),
    json(),
    lodash(),
    reactivex(),
    babel(BABEL_CONFIG),
    globals(),
    builtins(),
    resolve({ jsnext: true, browser: true }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/immutable/dist/immutable.js': Object.keys(require('immutable'))
      }
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env.prod ? 'production' : 'development') }),
    (env.prod ? uglify() /* uglify({}, minify) */ : noop())
  ]
};

export const SECONDARY_CONFIG = {
  format: 'es',
  context: 'window',
  plugins: [
    postcss({ plugins: [cssnano()] }),
    buble(),
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
  sourceMap: !env.prod
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
