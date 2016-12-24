import { join } from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import { stream } from 'browser-sync';

import { ASSETS_ROOT, DIST_ROOT } from '../constants';

gulp.task('copy', () => {
  return gulp.src([
      join(ASSETS_ROOT, 'favicon.ico'),
      join(ASSETS_ROOT, 'robots.txt'),
      join(ASSETS_ROOT, 'datas', 'manifest.json')
    ])
    .pipe(plumber())
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(stream());
});
