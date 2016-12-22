import gulp from 'gulp';
import util from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import rollup from 'rollup-stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import { stream } from 'browser-sync';

import { DIST_ROOT } from '../constants';
import { APP_CONFIG } from '../config/rollup.config';
import { CompileError } from '../utils';

let cache;
gulp.task('app', () => {
  APP_CONFIG.cache = cache;
  return rollup(APP_CONFIG)
    .on('bundle', (bundle) => { cache = bundle; })
    .on('error', CompileError.handle)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(util.env.type === 'dev' ? sourcemaps.init({ loadMaps: true }) : util.noop())
    .pipe(util.env.type === 'dev' ? sourcemaps.write('./') : util.noop())
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(stream());
});
