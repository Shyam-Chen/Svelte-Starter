import { join } from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import htmlmin from 'gulp-htmlmin';
import browsersync from 'browser-sync';

import { SOURCE_ROOT, DIST_ROOT } from '../constants';

gulp.task('index', () => {
  return gulp.src(join(SOURCE_ROOT, 'index.html'))
    .pipe(plumber())
    .pipe(changed(DIST_ROOT))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(browsersync.stream());
});
