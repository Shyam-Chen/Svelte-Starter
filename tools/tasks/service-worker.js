import { join } from 'path';
import gulp from 'gulp';
import { log } from 'gulp-util';
import swprecache from 'sw-precache';
import runsequence from 'run-sequence';

import pkg from '../../package.json';
import { DIST_ROOT } from '../constants';

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

const DEV_DIR = 'app';
const DIST_DIR = 'dist';

function writeServiceWorkerFile(rootDir, handleFetch, callback) {
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
      `${rootDir}/css/**.css`,
      `${rootDir}/**.html`,
      `${rootDir}/images/**.*`,
      `${rootDir}/js/**.js`
    ],
    stripPrefix: `${rootDir}/`,
    // verbose defaults to false, but for the purposes of this demo, log more.
    verbose: true
  };

  swprecache.write(join(rootDir, 'service-worker.js'), config, callback);
}

gulp.task('build-service-worker', function(callback) {
  runsequence('copy-dev-to-dist', 'generate-service-worker-dist', callback);
});

gulp.task('generate-service-worker-dev', function(callback) {
  writeServiceWorkerFile(DEV_DIR, false, callback);
});

gulp.task('generate-service-worker-dist', function(callback) {
  writeServiceWorkerFile(DIST_DIR, true, callback);
});

gulp.task('copy-dev-to-dist', function() {
  return gulp.src(`${DEV_DIR}/**`)
    .pipe(gulp.dest(DIST_DIR));
});
