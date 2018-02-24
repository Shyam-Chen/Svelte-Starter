import { join } from 'path';
import gulp from 'gulp';
import template from 'gulp-template';
import htmlmin from 'gulp-htmlmin';

import { INDEX_ENV, SOURCE_ROOT, DIST_ROOT } from '../env';
import { InjectService } from '../utils';

gulp.task('chunkhash', () => {
  return gulp.src(join(SOURCE_ROOT, 'index.html'))
    .pipe(template({
      ...INDEX_ENV,
      PRELOAD_POLYFILLS: '<!-- prepolyfills:js --><!-- endinject -->',
      PRELOAD_VENDOR: '<!-- prevendor:js --><!-- endinject -->',
      PRELOAD_APP: '<!-- preapp:js --><!-- endinject -->',
      POLYFILLS_SCRIPT: '<!-- polyfills:js --><!-- endinject -->',
      VENDOR_SCRIPT: '<!-- vendor:js --><!-- endinject -->',
      APP_SCRIPT: '<!-- app:js --><!-- endinject -->'
    }))
    .pipe(InjectService.preload('polyfills'))
    .pipe(InjectService.preload('vendor'))
    .pipe(InjectService.preload('app'))
    .pipe(InjectService.script('polyfills'))
    .pipe(InjectService.script('vendor'))
    .pipe(InjectService.script('app'))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(DIST_ROOT));
});
