import gulp from 'gulp';
import runsequence from 'run-sequence';

gulp.task('build', (done) => {
  return runsequence(['copy', 'index', 'app', 'vendor', 'polyfills'], 'generate', done);
});
