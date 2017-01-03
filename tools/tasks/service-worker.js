import { join } from 'path';
import gulp from 'gulp';
import { log } from 'gulp-util';
import swprecache from 'sw-precache';

import pkg from '../../package.json';
import { DIST_ROOT } from '../constants';

const writeServiceWorkerFile = (rootDir, handleFetch, done) => {
  const config = {
    cacheId: pkg.name,
    /*
    dynamicUrlToDependencies: {
      'dynamic/page1': [
        join(rootDir, 'views', 'layout.jade'),
        join(rootDir, 'views', 'page1.jade')
      ],
      'dynamic/page2': [
        join(rootDir, 'views', 'layout.jade'),
        join(rootDir, 'views', 'page2.jade')
      ]
    },
    */
    // If handleFetch is false (i.e. because this is called from generate-service-worker-dev), then
    // the service worker will precache resources but won't actually serve them.
    // This allows you to test precaching behavior without worry about the cache preventing your
    // local changes from being picked up during the development cycle.
    handleFetch: handleFetch,
    logger: log,
    runtimeCaching: [{
      // See https://github.com/GoogleChrome/sw-toolbox#methods
      urlPattern: /runtime-caching/,
      handler: 'cacheFirst',
      // See https://github.com/GoogleChrome/sw-toolbox#options
      options: {
        cache: {
          maxEntries: 1,
          name: 'runtime-cache'
        }
      }
    }],
    staticFileGlobs: [
      // `${rootDir}/css/**.css`,
      // `${rootDir}/**.html`,
      // `${rootDir}/images/**.*`,
      // `${rootDir}/js/**.js`

      `${rootDir}/*.js`,
      `${rootDir}/*.{html,json}`
    ],
    stripPrefix: `${rootDir}/`,
    // verbose defaults to false, but for the purposes of this demo, log more.
    verbose: true
  };

  swprecache.write(join(rootDir, 'service-worker.js'), config, done);
};

gulp.task('generate-service-worker-dev', (done) => {
  writeServiceWorkerFile(DIST_ROOT, false, done);
});

gulp.task('generate-service-worker-prod', (done) => {
  writeServiceWorkerFile(DIST_ROOT, true, done);
});
