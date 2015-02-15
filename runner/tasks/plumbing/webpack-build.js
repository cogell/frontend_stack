// inspired by http://webpack.github.io/docs/usage-with-gulp.html

var path = require('path');
var filename = path.basename(__filename, '.js');
var config = require('../../config').webpackProd;
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

var taskname = filename;

gulp.task( taskname, function (cb) {

  webpack(config, function (err, stats) {
    if (err) { throw new gutil.PluginError(taskname, err); }
    gutil.log(taskname, stats.toString({
      colors: true
    }));
    cb();
  });

});
