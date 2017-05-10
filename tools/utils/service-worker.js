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
        handleFetch,
        logger: log,
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: /\.com/,
            handler: 'fastest'
          }, {
            urlPattern: /runtime-caching/,
            handler: 'cacheFirst',
            options: {
              cache: {
                maxEntries: 50,
                name: 'runtime-cache'
              }
            }
          }, {
             default: 'networkFirst'
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
