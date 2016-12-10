import { join } from 'path';

import gulp from 'gulp';
import util from 'gulp-util';
import Karma from 'karma';

gulp.task('unit', (done) => {
  new Karma.Server({
    configFile: join(__dirname, '../config', 'karma.conf.js'),
    singleRun: util.env.type === 'watch' ? false : true
  }, done).start();
});
