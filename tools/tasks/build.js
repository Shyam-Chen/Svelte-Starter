import gulp from 'gulp';

gulp.task('build', ['copy', 'index', 'app', 'vendor', 'polyfills']);
