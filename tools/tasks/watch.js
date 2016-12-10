import { join } from 'path';
import gulp from 'gulp';

import { SOURCE_ROOT } from '../constants';

gulp.task('watch', () => {
  gulp.watch([
    join(SOURCE_ROOT, 'favicon.ico'),
    join(SOURCE_ROOT, 'robots.txt')
  ], ['copy']);

  gulp.watch([
    join(SOURCE_ROOT, 'index.html')
  ], ['index']);

  gulp.watch([
    join(SOURCE_ROOT, '**/*.{html,css,js}'),
    join(SOURCE_ROOT, '**/*.{gif,jpeg,jpg,png,svg}'),
    join(SOURCE_ROOT, '**/*.json'),
    `!${join(SOURCE_ROOT, 'index.html')}`,
    `!${join(SOURCE_ROOT, 'polyfills.js')}`,
    `!${join(SOURCE_ROOT, 'vendor.js')}`,
    `!${join(SOURCE_ROOT, '**/*.{spec.js,e2e-spec.js}')}`
  ], ['app']);

  gulp.watch([
    join(SOURCE_ROOT, 'vendor.js')
  ], ['vendor']);

  gulp.watch([
    join(SOURCE_ROOT, 'polyfills.js')
  ], ['polyfills']);
});
