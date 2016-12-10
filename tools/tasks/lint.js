import { join } from 'path';

import gulp from 'gulp';
import htmlhint from 'gulp-htmlhint';
import stylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint';

gulp.task('lint-html', () => {
  return gulp.src(join('src', '**/*.html'))
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter());
});

gulp.task('lint-css', () => {
  return gulp.src(join('src', '**/*.css'))
    .pipe(stylelint({
      reporters: [{
        formatter: 'string', console: true
      }]
    }));
});

gulp.task('lint-js', () => {
  return gulp.src(join('src', '**/*.js'))
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint', ['lint-html', 'lint-css', 'lint-js']);
