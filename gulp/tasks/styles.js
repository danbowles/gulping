var gulp          = require('gulp');
var sass          = require('gulp-sass');
var handleErrors  = require('../util/handleErrors');
var autoprefixer  = require('gulp-autoprefixer');
var rename        = require('gulp-rename');
var minifycss     = require('gulp-csso');
var csslint       = require('gulp-csslint');
var config        = require('../config').styles;

gulp.task('styles', function() {
  return gulp.src(config.src)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csslint())
    .pipe(csslint.reporter())
    .pipe(gulp.dest(config.dest))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});