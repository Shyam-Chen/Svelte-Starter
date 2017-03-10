import { join, basename } from 'path';
import gulp from 'gulp';
import template from 'gulp-template';
import inject from 'gulp-inject';
import htmlmin from 'gulp-htmlmin';

import { SOURCE_ROOT, DIST_ROOT } from '../constants';

gulp.task('chunkhash', () => {
  const injectScripts = (fileName) => {
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
      polyfills: '<!-- polyfills:js --><!-- endinject -->',
      vendor: '<!-- vendor:js --><!-- endinject -->',
      app: '<!-- app:js --><!-- endinject -->'
    }))
    .pipe(injectScripts('polyfills'))
    .pipe(injectScripts('vendor'))
    .pipe(injectScripts('app'))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(DIST_ROOT));
});
