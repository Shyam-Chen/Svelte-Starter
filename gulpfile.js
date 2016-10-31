const gulp = require('gulp');
const path = require('path');

const rollup = require('rollup-stream');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const postcss = require('rollup-plugin-postcss');
const cssnext = require('postcss-cssnext');
const rucksack = require('rucksack-css');
const cssnano = require('cssnano');

const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

const browserSync = require('browser-sync');
const history = require('connect-history-api-fallback');

const SOURCE_ROOT = path.join(__dirname, 'src');
const DIST_ROOT = path.join(__dirname, 'dist');


// ToDo: 原始碼映射

gulp.task('copy', () => {
  return gulp.src(path.join(SOURCE_ROOT, '**/*.html'))
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(browserSync.stream());
});


// ToDo: 合併串流
gulp.task('main', () => {
  return rollup({
      entry: path.join(SOURCE_ROOT, 'main.js'),
      format: 'cjs',
      plugins: [
        babel(),
        resolve({ jsnext: true, browser: true }),
        commonjs(),
        uglify(),
        postcss({
          plugins: [
            cssnext({ warnForDuplicates: false }),
            rucksack({ fallbacks: true, autoprefixer: true }),
            cssnano()
          ],
          extensions: ['.css']
        })
      ]
    })
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(browserSync.stream());
});

gulp.task('vendor', () => {
  return rollup({
      entry: path.join(SOURCE_ROOT, 'vendor.js'),
      format: 'iife',
      plugins: [
        resolve({ jsnext: true, browser: true }),
        commonjs(),
        uglify(),
        postcss({
          plugins: [
            cssnext(),
            rucksack({ fallbacks: true, autoprefixer: true }),
            cssnano()
          ],
          extensions: ['.css']
        })
      ]
    })
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DIST_ROOT));
});

gulp.task('images', () => {
  gulp
    .src('src/assets/images/**/*.{gif,jpeg,jpg,png,svg}')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(DIST_ROOT));
});

gulp.task('watch', () => {
  gulp.watch([
    path.join(SOURCE_ROOT, '**/*.html')
  ], ['copy']);

  gulp.watch([
    path.join(SOURCE_ROOT, '**/*.js')
  ], ['main']);
});

gulp.task('serve', () => {
  browserSync({
    server: {
      baseDir: DIST_ROOT,
      middleware: [history()]
    }
  });
});

// gulp.task('default', () => {

// });

gulp.task('default', ['copy', 'vendor', 'main', 'serve', 'watch']);
