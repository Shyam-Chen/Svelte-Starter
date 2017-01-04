import gulp from 'gulp';
import { env } from 'gulp-util';

import { DIST_ROOT } from '../constants';
import { writeServiceWorkerFile } from '../utils';

gulp.task('generate', (done) => {
  writeServiceWorkerFile(DIST_ROOT, (env.mode === 'prod'), done);
});
