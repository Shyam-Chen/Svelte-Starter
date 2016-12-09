import { join, resolve } from 'path';

import gulp from 'gulp';
import util from 'gulp-util';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import htmlmin from 'gulp-htmlmin';
import sourcemaps from 'gulp-sourcemaps';
import htmlhint from 'gulp-htmlhint';
import stylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint';
import protractor from 'gulp-protractor';

import rollup from 'rollup-stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

import browsersync from 'browser-sync';
import connectHistory from 'connect-history-api-fallback';
import Karma from 'karma';
import express from 'express';
import expressHistory from 'express-history-api-fallback';
import runsequence from 'run-sequence';

import { APP_CONFIG, VENDOR_CONFIG, POLYFILLS_CONFIG } from './rollup.conf';

const SOURCE_ROOT = join(__dirname, 'src');
const DIST_ROOT = join(__dirname, 'public');

class CompileError {
  static handle(err) {
    let self = this;
    if (util.env.type === 'dev') {
      let args = Array.from(arguments);

      notify.onError({
          title: 'Compile Error',
          message: `\r\n${err.message}`
        })
        .apply(this, args);

      self.emit('end');
    } else {
      util.log(`${util.colors.red(err)}`);
      process.exit(1);
    }
  }
}

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

gulp.task('copy', () => {
  return gulp.src([
      join(SOURCE_ROOT, 'favicon.ico'),
      join(SOURCE_ROOT, 'robots.txt')
    ])
    .pipe(plumber())
    .pipe(changed(DIST_ROOT))
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(browsersync.stream());
});

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

gulp.task('app', () => {
  let cache;
  return rollup({
      entry: join(SOURCE_ROOT, 'app.js'),
      format: 'iife',
      context: 'window',
      sourceMap: util.env.type === 'dev' && true,
      cache,
      plugins: APP_CONFIG
    })
    .on('bundle', (bundle) => { cache = bundle; })
    .on('error', CompileError.handle)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(util.env.type === 'dev' ? sourcemaps.init({ loadMaps: true }) : util.noop())
    .pipe(util.env.type === 'dev' ? sourcemaps.write('./') : util.noop())
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(browsersync.stream());
});

gulp.task('vendor', () => {
  return rollup(VENDOR_CONFIG)
    .on('error', CompileError.handle)
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DIST_ROOT));
});

gulp.task('polyfills', () => {
  return rollup(POLYFILLS_CONFIG)
    .on('error', CompileError.handle)
    .pipe(source('polyfills.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DIST_ROOT));
});

gulp.task('build', ['copy', 'index', 'app', 'vendor', 'polyfills']);

gulp.task('watch', () => {
  gulp.watch([
    join(SOURCE_ROOT, 'favicon.ico'),
    join(SOURCE_ROOT, 'robots.txt')
  ], ['copy']);

  gulp.watch([
    join(SOURCE_ROOT, 'index.html')
  ], ['index']);

  gulp.watch([
    join(SOURCE_ROOT, '**/*.{html,css,js}'),
    join(SOURCE_ROOT, '**/*.{gif,jpeg,jpg,png,svg}'),
    join(SOURCE_ROOT, '**/*.json'),
    `!${join(SOURCE_ROOT, 'index.html')}`,
    `!${join(SOURCE_ROOT, 'polyfills.js')}`,
    `!${join(SOURCE_ROOT, 'vendor.js')}`,
    `!${join(SOURCE_ROOT, '**/*.{spec.js,e2e-spec.js}')}`
  ], ['app']);

  gulp.watch([
    join(SOURCE_ROOT, 'vendor.js')
  ], ['vendor']);

  gulp.watch([
    join(SOURCE_ROOT, 'polyfills.js')
  ], ['polyfills']);
});

gulp.task('serve', () => {
  return browsersync({
    server: {
      baseDir: DIST_ROOT,
      middleware: [connectHistory()]
    }
  });
});

gulp.task('lint-html', () => {
  return gulp.src(join(SOURCE_ROOT, '**/*.html'))
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter());
});

gulp.task('lint-css', () => {
  return gulp.src(join(SOURCE_ROOT, '**/*.css'))
    .pipe(stylelint({
      reporters: [{
        formatter: 'string', console: true
      }]
    }));
});

gulp.task('lint-js', () => {
  return gulp.src(join(SOURCE_ROOT, '**/*.js'))
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint', ['lint-html', 'lint-css', 'lint-js']);

gulp.task('unit', (done) => {
  new Karma.Server({
    configFile: join(__dirname, 'karma.conf.js')
  }, done).start();
});

gulp.task('webdriver', protractor.webdriver_update);

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
