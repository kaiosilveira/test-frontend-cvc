var gulp = require('gulp');
var clean = require('gulp-clean');
var minify = require('gulp-minify');

gulp.task('default', function() {
  done();
});

gulp.task('compress', function() {
  gulp.src('lib/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('clean-scripts', function () {
  return gulp.src('dist/js/**/*.js', {read: false})
    .pipe(clean());
});

gulp.task('scripts', ['clean-scripts'], function () {
  gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['scripts']);
