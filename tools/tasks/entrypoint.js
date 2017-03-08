import { join } from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import template from 'gulp-template';
import browsersync from 'browser-sync';

import { SOURCE_ROOT, DIST_ROOT } from '../constants';

gulp.task('entrypoint', () => {
  return gulp.src(join(SOURCE_ROOT, 'index.html'))
    .pipe(plumber())
    .pipe(template({
      polyfills: '<script src="polyfills.js" defer></script>',
      vendor: '<script src="vendor.js" defer></script>',
      app: '<script src="app.js" defer></script>'
    }))
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(browsersync.stream());
});
