// inspired by http://webpack.github.io/docs/usage-with-gulp.html

var path = require('path');
var filename = path.basename(__filename, '.js');
var config = require('../../config')[filename];
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./../../../webpack.config.js'); // TODO: move this location into config?

var taskname = filename;

var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = 'sourcemap';
myDevConfig.debug = true;

// create a single instance of compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task( taskname, function (cb) {
  // run webpack
  devCompiler.run(function (err, stats) {
    if (err) { throw new gutil.PluginError(taskname, err); }
    gutil.log(taskname, stats.toString({
      colors: true
    }));
    cb();
  });
});
