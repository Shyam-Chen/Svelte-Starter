import { join } from 'path';
import gulp from 'gulp';

import { ASSETS_ROOT, DIST_ROOT } from '../env';

gulp.task('copy', () => {
  return gulp
    .src([
      join(ASSETS_ROOT, 'datas/manifest.json'),
      join(ASSETS_ROOT, 'datas/manifest.webapp'),
      join(ASSETS_ROOT, 'datas/robots.txt'),
      join(ASSETS_ROOT, 'images/favicon.ico'),
      join(ASSETS_ROOT, 'images/touch/*')
    ])
    .pipe(gulp.dest(DIST_ROOT));
});
