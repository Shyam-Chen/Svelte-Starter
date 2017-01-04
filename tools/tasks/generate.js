import { join } from 'path';
import gulp from 'gulp';
import { log, env } from 'gulp-util';
import swprecache from 'sw-precache';

import pkg from '../../package.json';
import { DIST_ROOT } from '../constants';

const writeServiceWorkerFile = (rootDir, handleFetch, done) => {
  swprecache.write(join(rootDir, 'service-worker.js'), {
    cacheId: pkg.name,
    handleFetch: handleFetch,
    logger: log,
    runtimeCaching: [
      {
        urlPattern: /runtime-caching/,
        handler: 'cacheFirst',
        options: {
          cache: {
            maxEntries: 1,
            name: 'runtime-cache'
          }
        }
      }
    ],
    staticFileGlobs: [
      `${rootDir}/*`
    ],
    stripPrefix: `${rootDir}/`,
    verbose: true
  }, done);
};

gulp.task('generate', (done) => {
  writeServiceWorkerFile(DIST_ROOT, (env.mode === 'prod'), done);
});
