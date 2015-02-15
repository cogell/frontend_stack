// inspired by http://webpack.github.io/docs/usage-with-gulp.html

var path = require('path');
var filename = path.basename(__filename, '.js');
var config = require('../../config')[filename];
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./../../../webpack.config.js'); // TODO: move into config?

var taskname = filename;

gulp.task( taskname, function (cb) {

  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        // this effexts the react lib size
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(myConfig, function (err, stats) {
    if (err) { throw new gutil.PluginError(taskname, err); }
    gutil.log(taskname, stats.toString({
      colors: true
    }));
    cb();
  });

});
