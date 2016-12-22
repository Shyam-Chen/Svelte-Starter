import { join } from 'path';
import gulp from 'gulp';
import swprecache from 'sw-precache';

import pkg from '../../package.json';
import { DIST_ROOT } from '../constants';

/*function writeServiceWorkerFile(rootDir, handleFetch, callback) {
  var config = {
    cacheId: packageJson.name,

    // dynamicUrlToDependencies: {
    //   'dynamic/page1': [
    //     path.join(rootDir, 'views', 'layout.jade'),
    //     path.join(rootDir, 'views', 'page1.jade')
    //   ],
    //   'dynamic/page2': [
    //     path.join(rootDir, 'views', 'layout.jade'),
    //     path.join(rootDir, 'views', 'page2.jade')
    //   ]
    // },

    // If handleFetch is false (i.e. because this is called from generate-service-worker-dev), then
    // the service worker will precache resources but won't actually serve them.
    // This allows you to test precaching behavior without worry about the cache preventing your
    // local changes from being picked up during the development cycle.
    handleFetch: handleFetch,
    logger: $.util.log,
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
      rootDir + '/css/**.css',
      rootDir + '/**.html',
      rootDir + '/images/**.*',
      rootDir + '/js/**.js'
    ],
    stripPrefix: rootDir + '/',
    // verbose defaults to false, but for the purposes of this demo, log more.
    verbose: true
  };

  swPrecache.write(path.join(rootDir, 'service-worker.js'), config, callback);
}*/

gulp.task('generate-service-worker', () => {
  return swprecache.write(join(DIST_ROOT, 'service-worker.js'), {
    cacheId: pkg.name,
    staticFileGlobs: [
      `${DIST_ROOT}/*.js`,
      `${DIST_ROOT}/*.{html,json}`
    ],
    stripPrefix: `${DIST_ROOT}/`,
    runtimeCaching: [{
      urlPattern: /this\\.is\\.a\\.regex/,
      handler: 'networkFirst'
    }]
  });
});
