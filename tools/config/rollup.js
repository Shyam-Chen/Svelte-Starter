import { join } from 'path';
import { env, noop } from 'gulp-util';
import reshape from 'rollup-plugin-reshape';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import istanbul from 'rollup-plugin-istanbul';
import buble from 'rollup-plugin-buble';
import cssnano from 'cssnano';

import { SOURCE_ROOT } from '../constants';
import { lodash } from '../utils';

import RESHAPE_CONFIG from './reshape';
import POSTCSS_CONFIG from './postcss';
import BABEL_CONFIG from './babel';

export const PRIMARY_CONFIG = {
  format: 'iife',
  context: 'window',
  plugins: [
    reshape(RESHAPE_CONFIG),
    postcss(POSTCSS_CONFIG),
    url({ limit: 32 * 1024 }),
    json(),
    lodash(),
    babel(BABEL_CONFIG),
    resolve({ jsnext: true, browser: true }),
    commonjs({ include: 'node_modules/**' }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env.prod ? 'production' : 'development') }),
    (env.prod ? uglify() : noop())
  ]
};

export const SECONDARY_CONFIG = {
  format: 'es',
  context: 'window',
  plugins: [
    postcss({ plugins: [cssnano()] }),
    buble(),
    resolve({ jsnext: true, browser: true }),
    commonjs({ include: 'node_modules/**' }),
    replace({ eval: '[eval][0]' }),
    uglify()
  ]
};

export const APP_CONFIG = Object.assign({}, PRIMARY_CONFIG, {
  input: join(SOURCE_ROOT, 'app.js'),
  sourcemap: !env.prod
});

export const TEST_CONFIG = Object.assign({}, PRIMARY_CONFIG, {
  sourceMap: 'inline',
  plugins: [
    ...PRIMARY_CONFIG['plugins'],
    istanbul({ exclude: join(SOURCE_ROOT, '**/*.spec.js') })
  ]
});

export const POLYFILLS_CONFIG = Object.assign({}, SECONDARY_CONFIG, {
  input: join(SOURCE_ROOT, 'polyfills.js')
});

export const VENDOR_CONFIG = Object.assign({}, SECONDARY_CONFIG, {
  input: join(SOURCE_ROOT, 'vendor.js')
});
