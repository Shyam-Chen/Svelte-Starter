import gulp from 'gulp';
import browsersync from 'browser-sync';
import fallback from 'connect-history-api-fallback';

import { DEV_PORT, DIST_ROOT } from '../env';

gulp.task('serve', () => {
  return browsersync({
    server: DIST_ROOT,
    // proxy: PROXY_URL,
    port: DEV_PORT,
    middleware: [fallback()]
  });
});
