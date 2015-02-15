// inspired by https://github.com/webpack/webpack-with-common-libs/blob/master/gulpfile.js

var filename = require('path').basename(__filename, '.js');
var config = require('../../config').webpackServer;
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var taskname = filename;

gulp.task( taskname, ['template'], function () {

  // Start webpack-dev-server
  new WebpackDevServer(webpack(config), {
    contentBase: '_dist/',
    stats: {
      colors: true
    }
  }).listen(8080, 'localhost', function (err) {
    if (err) { throw new gutil.PluginError(taskname, err); }
    gutil.log( taskname, 'http://localhost:8080/_dist');
  });

});
