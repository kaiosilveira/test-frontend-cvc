var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
let cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');

gulp.task('default', function() {
  done();
});

/* Index */

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCSS()))
        .pipe(gulp.dest('dist'));
});

/* Images */
gulp.task('img', function() {

  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));

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
  gulp.src('src/css/*.css')
  .pipe(cleanCSS({compatibility: 'ie9'}))
  .pipe(rename({
      suffix: '.min'
  }))
  .pipe(gulp.dest('dist/css'));
})

gulp.task('css-libs', function() {
  gulp.src('src/css/libs/**/*')
  .pipe(gulp.dest('dist/css/libs'));
});

gulp.task('default', ['scripts', 'stylesheets', 'img', 'html', 'css-libs']);
