var taskname = require('path').basename(__filename, '.js');
var config   = require('../config');
var gulp     = require('gulp');

gulp.task( taskname, ['build'], function () {
  gulp.watch( config.typescript.src, ['typescript'] );
  gulp.watch( config.copy.src, ['copy'] );
});

