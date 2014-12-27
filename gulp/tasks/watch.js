var taskname = require('path').basename(__filename, '.js');
var config   = require('../config');
var gulp     = require('gulp');

gulp.task( taskname, ['browser_sync'], function () {
  gulp.watch( config.typescript.src, ['concat'] );
  gulp.watch( config.copy.src, ['copy'] );
});

