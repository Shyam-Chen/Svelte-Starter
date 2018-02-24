import { join } from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import template from 'gulp-template';
import { stream } from 'browser-sync';

import { INDEX_ENV, SOURCE_ROOT, DIST_ROOT } from '../env';

gulp.task('entrypoint', () => {
  return gulp.src(join(SOURCE_ROOT, 'index.html'))
    .pipe(plumber())
    .pipe(template({
      ...INDEX_ENV,
      PRELOAD_POLYFILLS: '<link rel="preload" href="polyfills.js" as="script">',
      PRELOAD_VENDOR: '<link rel="preload" href="vendor.js" as="script">',
      PRELOAD_APP: '<link rel="preload" href="app.js" as="script">',
      POLYFILLS_SCRIPT: '<script src="polyfills.js" defer></script>',
      VENDOR_SCRIPT: '<script src="vendor.js" defer></script>',
      APP_SCRIPT: '<script src="app.js" defer></script>'
    }))
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(stream());
});
