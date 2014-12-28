var taskname   = require('path').basename(__filename, '.js');
var config     = require('../../config')[taskname];
var gulp       = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

var bundleLogger = require('../../util/bundle-logger');
var handleErrors = require('../../util/handle-errors');

gulp.task( taskname, function (callback) {

  var bundleQueue = config.bundleConfigs.length;

  var browserifyThis = function(bundleConfig) {

    var bundler = browserify({
      // Specify the entry point of your app
      entries: bundleConfig.entries,
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