import gulp from 'gulp';
import browsersync from 'browser-sync';
import fallback from 'connect-history-api-fallback';

import { DEV_PORT, DIST_ROOT } from '../constants';

gulp.task('serve', () => {
  return browsersync({
    server: DIST_ROOT,
    port: DEV_PORT,
    middleware: [fallback()]
  });
});
