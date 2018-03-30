import { join } from 'path';
import gulp from 'gulp';

import { ASSETS_ROOT, DIST_ROOT } from '../env';

gulp.task('copy', () => {
  return gulp
    .src([
      join(ASSETS_ROOT, 'datas/*'),
      join(ASSETS_ROOT, 'fonts/*'),
      join(ASSETS_ROOT, 'images/*'),
      join(ASSETS_ROOT, 'medias/*'),
    ])
    .pipe(gulp.dest(DIST_ROOT));
});
