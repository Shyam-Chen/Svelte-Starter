import { join } from 'path';
import gulp from 'gulp';

import { ASSETS_ROOT, DIST_ROOT } from '../constants';

gulp.task('copy', () => {
  return gulp.src([
      join(ASSETS_ROOT, 'datas/manifest.json'),
      join(ASSETS_ROOT, 'datas/manifest.webapp'),
      join(ASSETS_ROOT, 'datas/robots.txt'),
      join(ASSETS_ROOT, 'images/favicon.ico'),
      join(ASSETS_ROOT, 'images/touch/apple-touch-icon.png'),
      join(ASSETS_ROOT, 'images/touch/chrome-touch-icon-192x192.png'),
      join(ASSETS_ROOT, 'images/touch/icon-128x128.png'),
      join(ASSETS_ROOT, 'images/touch/ms-touch-icon-144x144-precomposed.png')
    ])
    .pipe(gulp.dest(DIST_ROOT));
});
