import { join } from 'path';
import gulp from 'gulp';
import { env } from 'gulp-util';
import { Server } from 'karma';

gulp.task('unit', done => {
  const config = {
    configFile: join(__dirname, '../config/karma.js'),
    singleRun: !env.watch
  };

  new Server(config, done).start();
});
