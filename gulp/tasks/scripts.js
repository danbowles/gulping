var gulp        = require('gulp');
var concat      = require('gulp-concat');
var ngAnnotate  = require('gulp-ng-annotate')
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');
var plumber     = require('gulp-plumber');
var config      = require('../config').scripts;

gulp.task('scripts', function() {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      // .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});