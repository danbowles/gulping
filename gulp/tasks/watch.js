var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync', 'nodemon'], function() {
  gulp.watch(config.styles.src, ['styles']);
  gulp.watch(config.markup.src, ['markup']);
  gulp.watch(config.scripts.src, ['scripts']);
});