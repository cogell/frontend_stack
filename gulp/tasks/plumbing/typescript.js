var taskname    = require('path').basename(__filename, '.js');
var config      = require('../../config')[taskname];
var gulp        = require('gulp');
var ts          = require('gulp-typescript');

var tsProject   = ts.createProject(config.opts);

gulp.task( taskname, function () {
  var tResult = gulp.src( config.src )
    .pipe( ts(tsProject, undefined, ts.reporter.fullReporter(true)) );

  return tResult.js.pipe( gulp.dest( config.dest ) );
});