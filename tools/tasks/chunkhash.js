import { join, basename } from 'path';
import gulp from 'gulp';
import template from 'gulp-template';
import inject from 'gulp-inject';
import htmlmin from 'gulp-htmlmin';

import { APP_BASE, SOURCE_ROOT, DIST_ROOT } from '../constants';

gulp.task('chunkhash', () => {
  const injectPreload = fileName => {
    return inject(
      gulp.src(
          join(DIST_ROOT, `${fileName}-*.js`),
          { read: false }
        ),
        {
          name: `pre${fileName}`,
          transform(filepath) {
            filepath = filepath.replace(`/${basename(DIST_ROOT)}/`, '');
            return `<link rel="preload" href="${filepath}" as="script">`;
          }
        }
      );
  };

  const injectScript = fileName => {
    return inject(
      gulp.src(
          join(DIST_ROOT, `${fileName}-*.js`),
          { read: false }
        ),
        {
          name: `${fileName}`,
          transform(filepath) {
            filepath = filepath.replace(`/${basename(DIST_ROOT)}/`, '');
            return `<script src="${filepath}" defer></script>`;
          }
        }
      );
  };

  return gulp.src(join(SOURCE_ROOT, 'index.html'))
    .pipe(template({
      PRELOAD_POLYFILLS: '<!-- prepolyfills:js --><!-- endinject -->',
      PRELOAD_VENDOR: '<!-- prevendor:js --><!-- endinject -->',
      PRELOAD_APP: '<!-- preapp:js --><!-- endinject -->',
      APP_BASE,
      POLYFILLS_SCRIPT: '<!-- polyfills:js --><!-- endinject -->',
      VENDOR_SCRIPT: '<!-- vendor:js --><!-- endinject -->',
      APP_SCRIPT: '<!-- app:js --><!-- endinject -->'
    }))
    .pipe(injectPreload('polyfills'))
    .pipe(injectPreload('vendor'))
    .pipe(injectPreload('app'))
    .pipe(injectScript('polyfills'))
    .pipe(injectScript('vendor'))
    .pipe(injectScript('app'))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(DIST_ROOT));
});
