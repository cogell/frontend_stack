var taskname   = require('path').basename(__filename, '.js');
var config     = require('../../config')[taskname];
var gulp       = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var derequire  = require('gulp-derequire');
var map        = require('lodash.map');
var merge      = require('merge-stream');

var bundleLogger = require('../../util/bundle-logger');
var handleErrors = require('../../util/handle-errors');

gulp.task( taskname, function (callback) {

  // if noop is true dont run task
  if ( config.noop ) {
    callback();
    return;
  }

  var bundleQueue = config.bundleConfigs.length;

  var browserifyThis = function(bundleConfig) {

    var bundler = browserify({
      // Specify the entry point of your app
      entries: bundleConfig.entries,
      // When standalone is a non-empty string, a standalone module is created with that name and a umd wrapper
      standalone: bundleConfig.standalone
    });

    var bundle = function() {
      // Log when bundling starts
      bundleLogger.start(bundleConfig.outputName);

      return bundler
        .bundle()
        // Report compile errors
        .on('error', handleErrors)
        // Use vinyl-source-stream to make the
        // stream gulp compatible. Specifiy the
        // desired output filename here.
        .pipe(source(bundleConfig.outputName))
        // Lets bundle be required other amd/commonjs packages
        .pipe(derequire())
        // Specify the output destination
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    var reportFinished = function() {
      // Log when bundling completes
      bundleLogger.end(bundleConfig.outputName);

      if(bundleQueue) {
        bundleQueue--;
        if(bundleQueue === 0) {
          // If queue is empty, tell gulp the task is complete.
          // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
          callback();
        }
      }
    };

    return bundle();
  };

  // Start bundling with Browserify for each bundleConfig specified
  config.bundleConfigs.forEach(browserifyThis);
});
