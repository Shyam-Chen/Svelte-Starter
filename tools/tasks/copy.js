import { join } from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import { stream } from 'browser-sync';

import { ASSETS_ROOT, DIST_ROOT } from '../constants';

gulp.task('copy', () => {
  return gulp.src([
      join(ASSETS_ROOT, 'datas/manifest.json'),
      join(ASSETS_ROOT, 'datas/robots.txt'),
      join(ASSETS_ROOT, 'images/favicon.ico'),
      join(ASSETS_ROOT, 'images/launcher-icon-1x.png'),
      join(ASSETS_ROOT, 'images/launcher-icon-2x.png'),
      join(ASSETS_ROOT, 'images/launcher-icon-4x.png')
    ])
    .pipe(plumber())
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(stream());
});
