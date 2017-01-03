import gulp from 'gulp';

gulp.task('build', ['copy', 'generate-service-worker-dev', 'index', 'app', 'vendor', 'polyfills']);
