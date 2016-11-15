const gulp = require('gulp');
const path = require('path');

const changed = require('gulp-changed');
// const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');

const rollup = require('rollup-stream');

const html = require('rollup-plugin-html');

const postcss = require('rollup-plugin-postcss');
const cssnext = require('postcss-cssnext');
const rucksack = require('rucksack-css');
const extend = require('postcss-extend');
const comment = require('postcss-comment');
const conditionals = require('postcss-conditionals');
const forFromTo = require('postcss-for');
const eachIn = require('postcss-each');
const cssnano = require('cssnano');

const babel = require('rollup-plugin-babel');
const globals = require('rollup-plugin-node-globals');
const builtins = require('rollup-plugin-node-builtins');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const uglify = require('rollup-plugin-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

// const imagemin = require('gulp-imagemin');
// const pngquant = require('imagemin-pngquant');

const image = require('rollup-plugin-image');
const json = require('rollup-plugin-json');

const browsersync = require('browser-sync');
const connectHistory = require('connect-history-api-fallback');

const express = require('express');
const expressHistory = require('express-history-api-fallback');
const gProtractor = require('gulp-protractor');

const runsequence = require('run-sequence');

const SOURCE_ROOT = path.join(__dirname, 'src');
const DIST_ROOT = path.join(__dirname, 'dist');

const IMAGES_ROOT = path.join('assets', 'images');
const DATAS_ROOT = path.join('assets', 'datas');

// TODO: dev/prod mode
// TODO: linter (HTML/CSS/JS)

class CompileError {
  static handle(err) {
    let args = Array.from(arguments);

    notify.onError({
        title: 'Compile Error',
        message: `\r\n${err.message}`
      })
      .apply(this, args);

    this.emit('end');
  }
}

class EndToEnd {
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
    .pipe(gulp.dest(DIST_ROOT));
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

let cache;
gulp.task('app', () => {
  return rollup({
      entry: path.join(SOURCE_ROOT, 'app.js'),
      format: 'iife',
      sourceMap: true,
      cache: cache,
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
            rucksack({ fallbacks: true, autoprefixer: true }),
            extend(),
            conditionals(),
            forFromTo(),
            eachIn(),
            cssnano()
          ]
        }),
        json(),
        image(),
        globals(),
        builtins(),
        resolve({ jsnext: true, browser: true }),
        commonjs(),
        babel(),
        uglify()
      ]
    })
    .on('bundle', (bundle) => { cache = bundle; })
    .on('error', CompileError.handle)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(browsersync.stream());
});

gulp.task('vendor', () => {
  return rollup({
      entry: path.join(SOURCE_ROOT, 'vendor.js'),
      format: 'es',
      // useStrict: false,
      treeshake: false,
      plugins: [
        // postcss({ plugins: [cssnano()] }),
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

// gulp.task('image', () => {
//   return gulp.src(path.join(SOURCE_ROOT, IMAGES_ROOT, '**/*.{gif,jpeg,jpg,png,svg}'))
//     .pipe(newer(path.join(DIST_ROOT, IMAGES_ROOT)))
//     .pipe(imagemin({
//       progressive: true,
//       svgoPlugins: [{ removeViewBox: false }],
//       use: [pngquant()]
//     }))
//     .pipe(gulp.dest(path.join(DIST_ROOT, IMAGES_ROOT)));
// });

// gulp.task('font', () => {
//   return gulp.src(path.join(SOURCE_ROOT, FONTS_ROOT, '**/*.{eot,svg,ttf,woff,woff2}'))
//   .pipe(newer(path.join(DIST_ROOT, FONTS_ROOT)))
//   .pipe(gulp.dest(path.join(DIST_ROOT, FONTS_ROOT)));
// });

// gulp.task('data', () => {
//   return gulp.src(path.join(SOURCE_ROOT, DATAS_ROOT, '**/*.{json,xml}'))
//   .pipe(newer(path.join(DIST_ROOT, DATAS_ROOT)))
//   .pipe(gulp.dest(path.join(DIST_ROOT, DATAS_ROOT)));
// });

gulp.task('build', ['copy', 'index', 'vendor', 'app']);

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
    path.join(SOURCE_ROOT, IMAGES_ROOT, '**/*.{gif,jpeg,jpg,png,svg}'),
    path.join(SOURCE_ROOT, DATAS_ROOT, '**/*.json'),
    `!${path.join(SOURCE_ROOT, '**/*.{spec.js,e2e-spec.js}')}`
  ], ['app']);
});

gulp.task('serve', () => {
  return browsersync({
    server: {
      baseDir: DIST_ROOT,
      middleware: [connectHistory()]
    }
  });
});

gulp.task('webdriver', gProtractor.webdriver_update);

gulp.task('e2e', (done) => {
  new EndToEnd()
    .server(9876, DIST_ROOT)
    .then((server) => {
      gulp.src(path.join(SOURCE_ROOT, '**/*.e2e-spec.js'))
        .pipe(gProtractor.protractor({ configFile: 'protractor.conf.js' }))
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
