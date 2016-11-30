const path = require('path');

const gulp = require('gulp');
const util = require('gulp-util');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const htmlmin = require('gulp-htmlmin');
const sourcemaps = require('gulp-sourcemaps');
const htmlhint = require('gulp-htmlhint');
const stylelint = require('gulp-stylelint');
const eslint = require('gulp-eslint');
const protractor = require('gulp-protractor');

const rollup = require('rollup-stream');
const html = require('rollup-plugin-html');
const postcss = require('rollup-plugin-postcss');
const comment = require('postcss-comment');
const modules = require('postcss-modules');
const cssnext = require('postcss-cssnext');
const rucksack = require('rucksack-css');
const cssnano = require('cssnano');
const image = require('rollup-plugin-image');
const json = require('rollup-plugin-json');
const globals = require('rollup-plugin-node-globals');
const builtins = require('rollup-plugin-node-builtins');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
const uglify = require('rollup-plugin-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const browsersync = require('browser-sync');
const connectHistory = require('connect-history-api-fallback');
const Karma = require('karma');
const express = require('express');
const expressHistory = require('express-history-api-fallback');
const runsequence = require('run-sequence');

const SOURCE_ROOT = path.join(__dirname, 'src');
const DIST_ROOT = path.join(__dirname, 'dist');

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
    let root = path.resolve(process.cwd(), dir);

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
      path.join(SOURCE_ROOT, 'favicon.ico'),
      path.join(SOURCE_ROOT, 'robots.txt')
    ])
    .pipe(plumber())
    .pipe(changed(DIST_ROOT))
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(browsersync.stream());
});

gulp.task('index', () => {
  return gulp.src(path.join(SOURCE_ROOT, 'index.html'))
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

let [cache, cssExportMap] = [undefined, {}];
gulp.task('app', () => {
  return rollup({
      entry: path.join(SOURCE_ROOT, 'app.js'),
      format: 'iife',
      context: 'window',
      sourceMap: util.env.type === 'dev' && true,
      cache,
      plugins: [
        html({
          htmlMinifierOptions: {
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true
          }
        }),
        postcss({
          parser: comment,
          plugins: [
            cssnext({ warnForDuplicates: false }),
            rucksack({ autoprefixer: true }),
            modules({ getJSON(id, tokens) { cssExportMap[id] = tokens; } }),
            cssnano()
          ],
          getExport(id) { return cssExportMap[id]; }
        }),
        image(),
        json(),
        globals(),
        builtins(),
        resolve({ jsnext: true, browser: true }),
        commonjs(),
        babel({ exclude: 'node_modules/**' }),
        replace({ ENV: util.env.type }),
        (util.env.type === 'prod' ? uglify() : util.noop())
      ]
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
  return rollup({
      entry: path.join(SOURCE_ROOT, 'vendor.js'),
      context: 'window',
      plugins: [
        postcss({ plugins: [cssnano()] }),
        globals(),
        builtins(),
        resolve({ jsnext: true, browser: true }),
        commonjs(),
        replace({ eval: '[eval][0]' }),
        uglify()
      ]
    })
    .on('error', CompileError.handle)
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DIST_ROOT));
});

gulp.task('polyfills', () => {
  return rollup({
      entry: path.join(SOURCE_ROOT, 'polyfills.js'),
      context: 'window',
      plugins: [
        globals(),
        builtins(),
        resolve({ jsnext: true, browser: true }),
        commonjs(),
        uglify()
      ]
    })
    .on('error', CompileError.handle)
    .pipe(source('polyfills.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DIST_ROOT));
});

gulp.task('build', ['copy', 'index', 'app', 'vendor', 'polyfills']);

gulp.task('watch', () => {
  gulp.watch([
    path.join(SOURCE_ROOT, 'favicon.ico'),
    path.join(SOURCE_ROOT, 'robots.txt')
  ], ['copy']);

  gulp.watch([
    path.join(SOURCE_ROOT, 'index.html')
  ], ['index']);

  gulp.watch([
    path.join(SOURCE_ROOT, '**/*.{html,css,js}'),
    path.join(SOURCE_ROOT, '**/*.{gif,jpeg,jpg,png,svg}'),
    path.join(SOURCE_ROOT, '**/*.json'),
    `!${path.join(SOURCE_ROOT, 'index.html')}`,
    `!${path.join(SOURCE_ROOT, 'polyfills.js')}`,
    `!${path.join(SOURCE_ROOT, 'vendor.js')}`,
    `!${path.join(SOURCE_ROOT, '**/*.{spec.js,e2e-spec.js}')}`
  ], ['app']);

  gulp.watch([
    path.join(SOURCE_ROOT, 'vendor.js')
  ], ['vendor']);

  gulp.watch([
    path.join(SOURCE_ROOT, 'polyfills.js')
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
  return gulp.src(path.join(SOURCE_ROOT, '**/*.html'))
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter());
});

gulp.task('lint-css', () => {
  return gulp.src(path.join(SOURCE_ROOT, '**/*.css'))
    .pipe(stylelint({
      reporters: [{
        formatter: 'string', console: true
      }]
    }));
});

gulp.task('lint-js', () => {
  return gulp.src(path.join(SOURCE_ROOT, '**/*.js'))
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint', ['lint-html', 'lint-css', 'lint-js']);

gulp.task('unit', (done) => {
  new Karma.Server({
    configFile: path.join(__dirname, 'karma.conf.js')
  }, done).start();
});

gulp.task('webdriver', protractor.webdriver_update);

gulp.task('e2e', (done) => {
  new Protractor()
    .server(9876, DIST_ROOT)
    .then((server) => {
      gulp.src(path.join(SOURCE_ROOT, '**/*.e2e-spec.js'))
        .pipe(protractor.protractor({
          configFile: util.env.type === 'labs' ? 'browserstack.conf.js' : 'protractor.conf.js'
        }))
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
