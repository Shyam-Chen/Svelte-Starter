import { join, basename } from 'path';
import gulp from 'gulp';
import inject from 'gulp-inject';

import { DIST_ROOT } from '../constants';

export const injectService = (fileName, serviceName) => {
  return inject(
    gulp.src(
        join(DIST_ROOT, `${fileName}-*.js`),
        { read: false }
      ),
      {
        name: (() => {
          switch (serviceName) {
            case 'preload':
              return `pre${fileName}`;
            case 'script':
              return `${fileName}`
            default:
              return;
          }
        })(),
        transform(filepath) {
          filepath = filepath.replace(`/${basename(DIST_ROOT)}/`, '');
          switch (serviceName) {
            case 'preload':
              return `<link rel="preload" href="${filepath}" as="script">`;
            case 'script':
              return `<script src="${filepath}" defer></script>`;
            default:
              return;
          }
        }
      }
    );
};
