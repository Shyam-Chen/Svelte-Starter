import { join } from 'path';
import gulp from 'gulp';
import sitemap from 'gulp-sitemap';

import { SITE_URL, SOURCE_ROOT, DIST_ROOT } from '../env';

gulp.task('sitemap', () => {
  return gulp
    .src([
      join(SOURCE_ROOT, 'pages/**/*.html'),
      `!${join(SOURCE_ROOT, 'pages/not-found/not-found.html')}`,
      `!${join(SOURCE_ROOT, 'pages/admin/**/*.html')}`
    ])
    .pipe(sitemap({
      siteUrl: SITE_URL,
      getLoc(siteUrl, loc, entry) {
        if (/\/home.html/g.test(entry.file)) return `${siteUrl}`;
        return `${siteUrl}${entry.file.replace(/\/[a-z]+.html/g, '')}`;
      }
    }))
    .pipe(gulp.dest(DIST_ROOT));
});
