import { join } from 'path';
import gulp from 'gulp';
import sitemap from 'gulp-sitemap';

import { SOURCE_ROOT, DIST_ROOT } from '../constants';

gulp.task('sitemap', () => {
  return gulp.src([
      join(SOURCE_ROOT, 'pages/*/*.html'),
      `!${join(SOURCE_ROOT, 'pages/error/error.html')}`
    ])
    .pipe(sitemap({
      siteUrl: 'https://frontend-starter-kit.firebaseapp.com/',
      getLoc(siteUrl, loc, entry) {
        if (entry.file.includes('home')) {
          return `${siteUrl}`;
        } else {
          return `${siteUrl}${entry.file.replace(/\/[a-z]+.html/g, '')}`;
        }
      }
    }))
    .pipe(gulp.dest(DIST_ROOT));
});
