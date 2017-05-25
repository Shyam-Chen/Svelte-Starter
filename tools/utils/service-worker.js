import { join, basename } from 'path';
import { log } from 'gulp-util';
import swprecache from 'sw-precache';

import pkg from '../../package.json';

export class ServiceWorker {
  constructor(rootDir, handleFetch, done) {
    swprecache.write(
      join(rootDir, 'service-worker.js'),
      {
        cacheId: pkg.name,
        dynamicUrlToDependencies: {},
        handleFetch,
        importScripts: [],
        logger: log,
        navigateFallback: 'index.html',
        navigateFallbackWhitelist: [/^(?!\/__).*/],
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
        staticFileGlobs: [`${basename(rootDir)}/*`],
        stripPrefix: `${basename(rootDir)}/`,
        verbose: true
      },
      done
    );
  }
}
