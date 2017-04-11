import { join, basename } from 'path';
import gulp from 'gulp';
import template from 'gulp-template';
import inject from 'gulp-inject';
import htmlmin from 'gulp-htmlmin';

import { APP_BASE, SOURCE_ROOT, DIST_ROOT } from '../constants';

const injectService = (fileName, serviceName) => {
  return inject(
    gulp.src(
        join(DIST_ROOT, `${fileName}-*.js`),
        { read: false }
      ),
      {
        name: (() => {
          switch (serviceName) {
            case 'preload':
              return `pre${fileName}`;
            case 'script':
              return `${fileName}`
            default:
              return;
          }
        })(),
        transform(filepath) {
          filepath = filepath.replace(`/${basename(DIST_ROOT)}/`, '');
          switch (serviceName) {
            case 'preload':
              return `<link rel="preload" href="${filepath}" as="script">`;
            case 'script':
              return `<script src="${filepath}" defer></script>`;
            default:
              return;
          }
        }
      }
    );
};

gulp.task('chunkhash', () => {
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
    .pipe(injectService('polyfills', 'preload'))
    .pipe(injectService('vendor', 'preload'))
    .pipe(injectService('app', 'preload'))
    .pipe(injectService('polyfills', 'script'))
    .pipe(injectService('vendor', 'script'))
    .pipe(injectService('app', 'script'))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(DIST_ROOT));
});
