import { join } from 'path';
import gulp from 'gulp';
import replace from 'gulp-replace';
import inject from 'gulp-inject';
import htmlmin from 'gulp-htmlmin';

import { DIST_ROOT } from '../constants';

gulp.task('chunkhash', () => {
  return gulp.src(join(DIST_ROOT, 'index.html'))
    .pipe(replace('<script src="polyfills.js" defer="defer"></script>', '<!-- polyfills:js --><!-- endinject -->'))
    .pipe(replace('<script src="vendor.js" defer="defer"></script>', '<!-- vendor:js --><!-- endinject -->'))
    .pipe(replace('<script src="app.js" defer="defer"></script>', '<!-- app:js --><!-- endinject -->'))
    .pipe(inject(gulp.src(join(DIST_ROOT, 'polyfills-*.js'), { read: false }), { name: 'polyfills', relative: true, transform(filepath) { return `<script src="${filepath}" defer></script>`; } }))
    .pipe(inject(gulp.src(join(DIST_ROOT, 'vendor-*.js'), { read: false }), { name: 'vendor', relative: true, transform(filepath) { return `<script src="${filepath}" defer></script>`; } }))
    .pipe(inject(gulp.src(join(DIST_ROOT, 'app-*.js'), { read: false }), { name: 'app', relative: true, transform(filepath) { return `<script src="${filepath}" defer></script>`; } }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(DIST_ROOT));
});
