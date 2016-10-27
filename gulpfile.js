const gulp = require('gulp');
const path = require('path');

const rollup = require('rollup-stream');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const babel2 = require('gulp-babel');

const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const rucksack = require('rucksack-css');
const cssnano = require('cssnano');

const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

const SOURCE_ROOT = path.join(__dirname, 'src');
const DIST_ROOT = path.join(__dirname, 'dist');

const SCRIPTS_ROOT = path.join(SOURCE_ROOT, 'scripts');


// ToDo: 原始碼映射

gulp.task('copy', () => {
  return gulp.src([
      path.join(SOURCE_ROOT, 'index.html')
    ])
    .pipe(gulp.dest(DIST_ROOT));
});

// 丟棄
gulp.task('styles', () => {
  return gulp.src('./src/styles/**/*.css')
    .pipe(postcss([
      cssnext(),
      rucksack({ fallbacks: true, autoprefixer: true }),
      cssnano()
    ]))
    .pipe(gulp.dest(DIST_ROOT));
});

// ToDo: 合併串流
// ToDo: Rullup PostCSS
gulp.task('scripts-m', () => {
  return rollup({
      entry: path.join(SCRIPTS_ROOT, 'main.js'),
      format: 'iife',
      plugins: [
        babel(),
        resolve({ jsnext: true, browser: true }),
        commonjs(),
        uglify()
      ]
    })
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DIST_ROOT));
});

gulp.task('scripts-v', () => {
  return rollup({
      entry: path.join(SCRIPTS_ROOT, 'vendor.js'),
      format: 'iife',
      plugins: [
        babel(),
        resolve({ jsnext: true, browser: true }),
        commonjs(),
        uglify()
      ]
    })
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DIST_ROOT));
});

// 丟棄
gulp.task('try', () => {
  gulp.src('src/**/*.js')
    .pipe(babel2({ presets: ['es2015'] }))
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
    .pipe(gulp.dest('src/images'));
});

gulp.task('watch', () => {

});

// 開發模式即生產模式
// 壓縮還是會在開發階段，避免壓縮後，程式不能動
gulp.task('default', () => {

});
