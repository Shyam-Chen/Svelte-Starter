import { join } from 'path';
import gulp from 'gulp';

import { SOURCE_ROOT } from '../env';

gulp.task('watch', () => {
  gulp.watch([
    join(SOURCE_ROOT, 'index.html')
  ], ['entrypoint']);

  gulp.watch([
    join(SOURCE_ROOT, '**/*.{html,css,js,json}'),
    `!${join(SOURCE_ROOT, 'index.html')}`,
    `!${join(SOURCE_ROOT, 'polyfills.js')}`,
    `!${join(SOURCE_ROOT, 'vendor.js')}`,
    `!${join(SOURCE_ROOT, '**/*.{spec,e2e-spec}.js')}`
  ], ['app']);

  gulp.watch([
    join(SOURCE_ROOT, 'vendor.js')
  ], ['vendor']);

  gulp.watch([
    join(SOURCE_ROOT, 'polyfills.js')
  ], ['polyfills']);
});
