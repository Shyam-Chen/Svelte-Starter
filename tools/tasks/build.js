import gulp from 'gulp';
import { env } from 'gulp-util';
import runsequence from 'run-sequence';

gulp.task('build', (done) => {
  if (env.mode === 'prod') {
    return runsequence(['copy', 'entrypoint', 'app', 'vendor', 'polyfills'], 'chunkhash', 'sitemap', 'precache', done);
  } else {
    return runsequence(['copy', 'entrypoint', 'app', 'vendor', 'polyfills'], 'precache', done);
  }
});
