var taskname = require('path').basename(__filename, '.js');
var config   = require('../config');
var gulp     = require('gulp');
var map      = require('lodash.map');

gulp.task( taskname, ['browser_sync'], function () {

  // special cases
  var copySrc = map(config.copy, function(config){ return config.src; });
  gulp.watch( copySrc, ['copy'] );

  // watch all config objs that have a "watch" prop
  map(config, function (config) {
    if (config.watch === undefined || config.watch.noop) {
      return;
    }

    gulp.watch( config.src, [config.watch.task] );
  })

});

