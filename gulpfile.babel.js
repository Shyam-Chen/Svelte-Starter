import gulp from 'gulp';
import runsequence from 'run-sequence';
import requiredir from 'require-dir';

requiredir('./tools/tasks');

gulp.task('dev', (done) => runsequence('build', 'watch', 'serve', done));
gulp.task('dev-watch', (done) => runsequence('build', 'watch', done));
