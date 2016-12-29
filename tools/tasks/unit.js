import { join } from 'path';
import gulp from 'gulp';
import { env } from 'gulp-util';
import { Server } from 'karma';

gulp.task('unit', (done) => {
  new Server({
    configFile: join(__dirname, '../config', 'karma.conf.js'),
    singleRun: env.type === 'watch' ? false : true
  }, done).start();
});
