import { join } from 'path';
import gulp from 'gulp';

import { ASSETS_ROOT, DIST_ROOT } from '../constants';

gulp.task('copy', () => {
  return gulp.src([
      join(ASSETS_ROOT, 'datas/manifest.json'),
      join(ASSETS_ROOT, 'datas/manifest.webapp'),
      join(ASSETS_ROOT, 'datas/robots.txt'),
      join(ASSETS_ROOT, 'images/favicon.ico'),
      join(ASSETS_ROOT, 'images/launcher-icon-1x.png'),
      join(ASSETS_ROOT, 'images/launcher-icon-2x.png'),
      join(ASSETS_ROOT, 'images/launcher-icon-3x.png'),
      join(ASSETS_ROOT, 'images/launcher-icon-4x.png')
    ])
    .pipe(gulp.dest(DIST_ROOT));
});
