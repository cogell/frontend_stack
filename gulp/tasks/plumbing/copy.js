var taskname = require('path').basename(__filename, '.js');
var config   = require('../../config')[taskname];
var gulp     = require('gulp');

gulp.task( taskname, function () {
  return gulp.src( config.src )
    .pipe( gulp.dest(config.dest) );
});