import gulp from 'gulp';
import browsersync from 'browser-sync';
import history from 'connect-history-api-fallback';

gulp.task('serve', () => {
  return browsersync({
    server: {
      baseDir: 'public',
      middleware: [history()]
    }
  });
});
