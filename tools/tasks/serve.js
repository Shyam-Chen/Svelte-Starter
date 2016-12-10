import gulp from 'gulp';
import browsersync from 'browser-sync';
import history from 'connect-history-api-fallback';

import { DIST_ROOT } from '../constants';

gulp.task('serve', () => {
  return browsersync({
    server: {
      baseDir: DIST_ROOT,
      middleware: [history()]
    }
  });
});
