// inspired by https://github.com/webpack/webpack-with-common-libs/blob/master/gulpfile.js

var filename = require('path').basename(__filename, '.js');
var config = require('../../config')[filename];
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./../../../webpack.config.js'); // TODO: move into config?

var taskname = filename;

gulp.task( taskname, function () {

  var myConfig = Object.create(webpackConfig);
  // issue 88: https://github.com/webpack/webpack-dev-server/issues/88
  // override config path with single slash
  myConfig.output.path = '/';
  myConfig.devtool = 'sourcemap';
  myConfig.debug = true;

  // Start webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath: '/' + myConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8080, 'localhost', function (err) {
    if (err) { throw new gutil.PluginError(taskname, err); }
    gutil.log( taskname, 'http://localhost:8080/webpack-dev-server/index.html');
  });

});
