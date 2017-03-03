import gulp from 'gulp';
import runsequence from 'run-sequence';

gulp.task('build', (done) => {
  return runsequence(['copy', 'entrypoint', 'app', 'vendor', 'polyfills'], 'precache', done);
});
