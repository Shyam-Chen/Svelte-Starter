import { join } from 'path';
import gulp from 'gulp';
import htmlhint from 'gulp-htmlhint';
import stylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint';

import { SOURCE_ROOT } from '../constants';

gulp.task('lint-html', () => {
  return gulp.src(join(SOURCE_ROOT, '**/*.html'))
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter());
});

gulp.task('lint-css', () => {
  return gulp.src(join(SOURCE_ROOT, '**/*.css'))
    .pipe(stylelint({
      reporters: [{
        formatter: 'string', console: true
      }]
    }));
});

gulp.task('lint-js', () => {
  return gulp.src(join(SOURCE_ROOT, '**/*.js'))
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint', ['lint-html', 'lint-css', 'lint-js']);
