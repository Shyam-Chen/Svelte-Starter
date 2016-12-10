import { join } from 'path';

import gulp from 'gulp';
import util from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import rollup from 'rollup-stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import { stream } from 'browser-sync';

import { SOURCE_ROOT, DIST_ROOT } from '../constants';
import { APP_CONFIG } from '../config/rollup.conf';
import { CompileError } from '../utils';

gulp.task('app', () => {
  let cache;
  return rollup({
      entry: join(SOURCE_ROOT, 'app.js'),
      format: 'iife',
      context: 'window',
      sourceMap: util.env.type === 'dev' && true,
      cache,
      plugins: APP_CONFIG
    })
    .on('bundle', (bundle) => { cache = bundle; })
    .on('error', CompileError.handle)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(util.env.type === 'dev' ? sourcemaps.init({ loadMaps: true }) : util.noop())
    .pipe(util.env.type === 'dev' ? sourcemaps.write('./') : util.noop())
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(stream());
});
