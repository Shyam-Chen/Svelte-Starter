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
import buble from 'rollup-plugin-buble';
import cssnano from 'cssnano';

import { APP_ENV, SOURCE_ROOT } from '../env';
import { lodash } from '../utils';

import RESHAPE_CONFIG from './reshape';
import POSTCSS_CONFIG from './postcss';
import { BABEL_CONFIG_APP, BABEL_CONFIG_TEST } from './babel';

export const APP_CONFIG = {
  input: join(SOURCE_ROOT, 'app.js'),
  format: 'iife',
  context: 'window',
  sourcemap: !env.prod,
  plugins: [
    reshape(RESHAPE_CONFIG),
    postcss(POSTCSS_CONFIG),
    url({ limit: 32 * 1024 }),
    json(),
    lodash(),
    babel(BABEL_CONFIG_APP),
    resolve({ jsnext: true, browser: true }),
    commonjs({ include: 'node_modules/**' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env.prod ? 'production' : 'development'),
      'process.env.FIREBASE_CONFIG': JSON.stringify(APP_ENV.FIREBASE_CONFIG),
      'process.env.SENTRY_URL': JSON.stringify(APP_ENV.SENTRY_URL),
      'process.env.FUNC_URL': JSON.stringify(APP_ENV.FUNC_URL)
    }),
    (env.prod ? uglify() : noop())
  ]
};

export const TEST_CONFIG = {
  format: 'iife',
  context: 'window',
  plugins: [
    reshape(RESHAPE_CONFIG),
    postcss(POSTCSS_CONFIG),
    url({ limit: 32 * 1024 }),
    json(),
    lodash(),
    babel(BABEL_CONFIG_TEST),
    resolve({ jsnext: true, browser: true }),
    commonjs({ include: 'node_modules/**' }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env.prod ? 'production' : 'development') }),
    (env.prod ? uglify() : noop())
  ]
};

export const PREROLLUP_CONFIG = {
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

export const POLYFILLS_CONFIG = Object.assign(
  {},
  PREROLLUP_CONFIG,
  { input: join(SOURCE_ROOT, 'polyfills.js') }
);

export const VENDOR_CONFIG = Object.assign(
  {},
  PREROLLUP_CONFIG,
  { input: join(SOURCE_ROOT, 'vendor.js') }
);
