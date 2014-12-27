var gulp       = require('gulp');
var taskname   = require('path').basename(__filename, '.js');
var config     = require('./../../config')[taskname];

var sourcemaps = require('gulp-sourcemaps');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');

gulp.task( taskname, function () {
  return gulp.src( config.src )
    .pipe( sourcemaps.init() )
      .pipe( concat( config.output ) )
      // .pipe( uglify() )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( config.dest ) );
});