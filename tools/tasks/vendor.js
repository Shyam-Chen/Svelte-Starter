import gulp from 'gulp';
import { env, noop } from 'gulp-util';
import rollup from 'rollup-stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import rev from 'gulp-rev';

import { DIST_ROOT } from '../env';
import { VENDOR_CONFIG } from '../config/rollup';
import { CompileError } from '../utils';

gulp.task('vendor', () => {
  return rollup(VENDOR_CONFIG)
    .on('error', CompileError.handle)
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(env.prod ? rev() : noop())
    .pipe(gulp.dest(DIST_ROOT))
});
