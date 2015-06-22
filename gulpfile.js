var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: ['./']
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('serve', ['browser-sync'], function() {
    gulp.watch('*.html', ['bs-reload']);
});
