var gulp          = require('gulp');
var jade          = require('gulp-jade');
var handleErrors  = require('../util/handleErrors');
var config        = require('../config').markup;

gulp.task('markup', function() {
  return gulp.src(config.src)
    .pipe(jade({
      pretty: true
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});