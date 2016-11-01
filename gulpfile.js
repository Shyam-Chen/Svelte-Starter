const gulp = require('gulp');
const path = require('path');

const htmlmin = require('gulp-htmlmin');

const rollup = require('rollup-stream');
const babel = require('rollup-plugin-babel');
const asyncfunc = require('rollup-plugin-async');
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

const browsersync = require('browser-sync');
const history = require('connect-history-api-fallback');

const runsequence = require('run-sequence');

const SOURCE_ROOT = path.join(__dirname, 'src');
const DIST_ROOT = path.join(__dirname, 'dist');

gulp.task('view', () => {
  return gulp.src(path.join(SOURCE_ROOT, '**/*.html'))
    .pipe(htmlmin({ collapseWhitespace: true, removeAttributeQuotes: true, removeComments: true, minifyCSS: true, minifyJS: true }))
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(browsersync.stream());
});

// ToDo: 原始碼映射
// ToDo: 合併串流 (main & vendor)
// ToDo: 加入快取
gulp.task('main', () => {
  return rollup({
      entry: path.join(SOURCE_ROOT, 'main.js'),
      format: 'iife',
      plugins: [
        postcss({ plugins: [cssnext({ warnForDuplicates: false }), rucksack({ fallbacks: true, autoprefixer: true }), cssnano()] }),
        babel(),
        asyncfunc(),
        resolve({ jsnext: true, browser: true }),
        commonjs(),
        uglify()
      ]
    })
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(browsersync.stream());
});

gulp.task('vendor', () => {
  return rollup({
      entry: path.join(SOURCE_ROOT, 'vendor.js'),
      format: 'iife',
      plugins: [
        postcss({ plugins: [cssnano()] }),
        resolve({ jsnext: true, browser: true }),
        commonjs(),
        uglify()
      ]
    })
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DIST_ROOT));
});

// ToDo: 只傳遞新的檔案
gulp.task('image', () => {
  return gulp.src('src/assets/images/**/*.{gif,jpeg,jpg,png,svg}')
    .pipe(imagemin({ progressive: true, svgoPlugins: [{ removeViewBox: false }], use: [pngquant()] }))
    .pipe(gulp.dest(DIST_ROOT));
});

// ToDo: ...
gulp.task('font', () => {
  return gulp.src('src/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe();
});

// ToDo: ...
gulp.task('data', () => {
  return gulp.src('src/assets/datas/**/*.json')
    .pipe();
});

// ToDo: 將 `build` 放入
gulp.task('watch', () => {
  gulp.watch([
    path.join(SOURCE_ROOT, '**/*.html')
  ], ['view']);

  gulp.watch([
    path.join(SOURCE_ROOT, '**/*.js')
  ], ['main']);
});

gulp.task('serve', () => {
  return browsersync({
    server: {
      baseDir: DIST_ROOT,
      middleware: [history()]
    }
  });
});

gulp.task('default', (done) => {
  return runsequence(['view', 'vendor', 'main'], 'serve', 'watch', done)
});
