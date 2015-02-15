var assign = require('lodash.assign');
var webpack = require('webpack');

var src = '_src';
var dest = '_dist';

var webpackConfig = {
  entry: './_src/index.js',
  output: {
    // path: '/_dist/', // This is where images AND js will go
    // publicPath: '/js/', // This is used to generate URLs to e.g. images
    // contentBase: '/_dist/',
    filename: 'bundle.js'
  },
   module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }, // loaders can take parameters as a querystring
      { test: /\.scss$/, loader: 'style!css!sass'}
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.json')
    extensions: ['', '.js', '.json', '.scss']
  },
  plugins: []
}

var gulpTasksConfig = {
  src: src,
  dest: dest,

  template: {
    src: src + '/index.html',
    dest: dest,
    scripts: [
      'http://localhost:8080/webpack-dev-server.js',
      'bundle.js'
    ],
    watch: {
      task: 'template'
    }
  },

  webpackProd: assign({}, webpackConfig, {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          // this effexts the react lib size
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
  }),

  webpackServer: assign({}, webpackConfig, {
    output: {
      // issue 88: https://github.com/webpack/webpack-dev-server/issues/88
      // override config path with single slash
      path: '/',
    },
    devtool: 'sourcemap',
    debug: true
  }),

  clean: {
    src: [ dest ]
  }

};

module.exports = gulpTasksConfig;
