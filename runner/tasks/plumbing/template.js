var filename = require('path').basename(__filename, '.js');
var config = require('../../config')[filename];
var gulp = require('gulp');
var template = require('gulp-template');

gulp.task( filename, function () {

  return gulp.src( config.src )
    .pipe( template({'scripts': config.scripts}) )
    .pipe( gulp.dest(config.dest) );

});
