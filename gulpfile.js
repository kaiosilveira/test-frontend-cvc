var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
let cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('default', function() {
  done();
});

/* Javascript */
gulp.task('clean-scripts', function () {
  return gulp.src('dist/js/**/*.js', {read: false})
    .pipe(clean());
});

gulp.task('scripts', ['clean-scripts'], function () {
  gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        },
        ignoreFiles: ['-min.js', '.min.js']
    }))
    .pipe(gulp.dest('dist/js'));
});

/* CSS */
gulp.task('clean-stylesheets', function () {
  return gulp.src('dist/css/**/*.css', {read: false})
    .pipe(clean());
});

gulp.task('stylesheets', ['clean-stylesheets'], function() {
  gulp.src('src/css/**/*.css')
  .pipe(cleanCSS({compatibility: 'ie9'}))
  .pipe(rename({
      suffix: '.min'
  }))
  .pipe(gulp.dest('dist/css'));
})

gulp.task('default', ['scripts', 'stylesheets']);
