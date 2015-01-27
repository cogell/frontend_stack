var gulp        = require('gulp');
var taskname    = require('path').basename(__filename, '.js');
var runSequence = require('run-sequence');

gulp.task( taskname, ['clean'], function (cb) {
  // runSequence(['copy', 'typescript', 'browserify'], cb);
  runSequence(['copy', 'typescript'], cb);
});
