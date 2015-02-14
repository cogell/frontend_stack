var taskname = require('path').basename(__filename, '.js');
var config = require('../../config');
var gulp = require('gulp');
var react = require('gulp-react');
var wrap = require('gulp-wrap');
var filter = require('gulp-filter');
var lint = require('gulp-eslint');

gulp.task( taskname, function () {

  // get all js files in apps/
  // filter out only jsx for react()
  // restore stream to all js files
  // run wrap on everything
  // write out to dest

  var onlyJSX = filter(['**/*.jsx']);

  return gulp.src( config.javascript.src )
    .pipe( onlyJSX )
    .pipe( react() )
    .pipe( onlyJSX.restore() )
    .pipe( lint() )
    .pipe( wrap( config.wrap.wrapText ) )
    .pipe( gulp.dest( config.javascript.dest ) );

});
