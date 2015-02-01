var taskname = require('path').basename(__filename, '.js');
var config   = require('../../config')[taskname];
var gulp     = require('gulp');
var react    = require('gulp-react');

gulp.task( taskname, function () {

  return gulp.src( config.src )
    .pipe(react())
    .pipe(gulp.dest( config.dest ));

});
