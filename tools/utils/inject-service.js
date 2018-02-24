import { join, basename } from 'path';
import gulp from 'gulp';
import inject from 'gulp-inject';

import { DIST_ROOT } from '../env';

export class InjectService {
  static preload(fileName) {
    return inject(
      gulp.src(
        join(DIST_ROOT, `${fileName}-*.js`),
        { read: false }
      ),
      {
        name: `pre${fileName}`,
        transform(filepath) {
          filepath = filepath.replace(`/${basename(DIST_ROOT)}/`, '');
          return `<link rel="preload" href="${filepath}" as="script">`;
        }
      }
    );
  }

  static script(fileName) {
    return inject(
      gulp.src(
        join(DIST_ROOT, `${fileName}-*.js`),
        { read: false }
      ),
      {
        name: `${fileName}`,
        transform(filepath) {
          filepath = filepath.replace(`/${basename(DIST_ROOT)}/`, '');
          return `<script src="${filepath}" defer></script>`;
        }
      }
    );
  }
}
