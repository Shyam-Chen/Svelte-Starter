import { join } from 'path';
import gulp from 'gulp';
import inject from 'gulp-inject';
import runsequence from 'run-sequence';

import { DIST_ROOT } from '../constants';

gulp.task('build', (done) => {
  return runsequence(['copy', 'entrypoint', 'app', 'vendor', 'polyfills'], 'precache', done);
});

gulp.task('postbuild', () => {
  return gulp.src(join(DIST_ROOT, 'index.html'))
    .pipe(inject(gulp.src(join(DIST_ROOT, 'polyfills-*.js'), { read: false }), { name: 'polyfills', relative: true }))
    .pipe(inject(gulp.src(join(DIST_ROOT, 'vendor-*.js'), { read: false }), { name: 'vendor', relative: true }))
    .pipe(inject(gulp.src(join(DIST_ROOT, 'app-*.js'), { read: false }), { name: 'app', relative: true }))
    .pipe(gulp.dest(DIST_ROOT));
});
