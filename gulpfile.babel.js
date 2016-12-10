import { join, resolve } from 'path';

import gulp from 'gulp';
import util from 'gulp-util';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import htmlmin from 'gulp-htmlmin';

import protractor from 'gulp-protractor';

import browsersync from 'browser-sync';
import Karma from 'karma';
import express from 'express';
import expressHistory from 'express-history-api-fallback';
import runsequence from 'run-sequence';

import requiredir from 'require-dir';

requiredir('./tools/tasks');

const SOURCE_ROOT = join(__dirname, 'src');
const DIST_ROOT = join(__dirname, 'public');

class Protractor {
  server(port, dir) {
    let app = express();
    let root = resolve(process.cwd(), dir);

    app.use(express.static(root));
    app.use(expressHistory('index.html', { root }));

    return new Promise((resolve) => {
      let server = app.listen(port, () => {
        resolve(server);
      });
    });
  }
}

gulp.task('index', () => {
  return gulp.src(join(SOURCE_ROOT, 'index.html'))
    .pipe(plumber())
    .pipe(changed(DIST_ROOT))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(browsersync.stream());
});

gulp.task('unit', (done) => {
  new Karma.Server({
    configFile: join(__dirname, 'karma.conf.js'),
    singleRun: util.env.type === 'watch' ? false : true
  }, done).start();
});

gulp.task('e2e', (done) => {
  new Protractor()
    .server(9876, DIST_ROOT)
    .then((server) => {
      gulp.src(join(SOURCE_ROOT, '**/*.e2e-spec.js'))
        .pipe(protractor.protractor({ configFile: 'protractor.conf.js' }))
        .on('error', (error) => { throw error; })
        .on('end', () => { server.close(done); });
    });
});

gulp.task('dev', (done) => {
  return runsequence('build', 'watch', 'serve', done);
});

gulp.task('dev-watch', (done) => {
  return runsequence('build', 'watch', done);
});
