var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('browserify', function() {
    return browserify('./js/app.js')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
  gulp.watch('./js/**/*.js', ['browserify']);
});

gulp.task('build', ['browserify']);
gulp.task('default', ['watch', 'browserify']);
