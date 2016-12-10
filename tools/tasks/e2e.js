import { join } from 'path';
import gulp from 'gulp';
import { webdriver_update, protractor } from 'gulp-protractor';

import { SOURCE_ROOT, DIST_ROOT } from '../constants';
import { Protractor } from '../utils';

gulp.task('webdriver', webdriver_update);

gulp.task('e2e', (done) => {
  new Protractor()
    .server(9876, DIST_ROOT)
    .then((server) => {
      gulp.src(join(SOURCE_ROOT, '**/*.e2e-spec.js'))
        .pipe(protractor({ configFile: join(__dirname, '../config', 'protractor.conf.js') }))
        .on('error', (error) => { throw error; })
        .on('end', () => { server.close(done); });
    });
});
