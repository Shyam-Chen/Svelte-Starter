import gulp from 'gulp';
import rollup from 'rollup-stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

import { DIST_ROOT } from '../constants';
import { VENDOR_CONFIG } from '../config/rollup.config';
import { CompileError } from '../utils';

gulp.task('vendor', () => {
  return rollup(VENDOR_CONFIG)
    .on('error', CompileError.handle)
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DIST_ROOT));
});
