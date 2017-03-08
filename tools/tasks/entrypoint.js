import { join } from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import browsersync from 'browser-sync';

import { SOURCE_ROOT, DIST_ROOT } from '../constants';

gulp.task('entrypoint', () => {
  return gulp.src(join(SOURCE_ROOT, 'index.html'))
    .pipe(plumber())
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(browsersync.stream());
});
