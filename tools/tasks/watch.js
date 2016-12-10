import { join } from 'path';

import gulp from 'gulp';

gulp.task('watch', () => {
  gulp.watch([
    join('src', 'favicon.ico'),
    join('src', 'robots.txt')
  ], ['copy']);

  gulp.watch([
    join('src', 'index.html')
  ], ['index']);

  gulp.watch([
    join('src', '**/*.{html,css,js}'),
    join('src', '**/*.{gif,jpeg,jpg,png,svg}'),
    join('src', '**/*.json'),
    `!${join('src', 'index.html')}`,
    `!${join('src', 'polyfills.js')}`,
    `!${join('src', 'vendor.js')}`,
    `!${join('src', '**/*.{spec.js,e2e-spec.js}')}`
  ], ['app']);

  gulp.watch([
    join('src', 'vendor.js')
  ], ['vendor']);

  gulp.watch([
    join('src', 'polyfills.js')
  ], ['polyfills']);
});
