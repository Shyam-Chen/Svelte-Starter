import gulp from 'gulp';
import { env } from 'gulp-util';
import runsequence from 'run-sequence';

gulp.task('build', done => {
  if (env.prod) {
    return runsequence(
      ['copy', 'entrypoint', 'app', 'vendor', 'polyfills'],
      'chunkhash', 'sitemap', 'precache',
      done
    );
  }

  return runsequence(
    ['copy', 'entrypoint', 'app', 'vendor', 'polyfills'],
    'precache',
    done
  );
});
