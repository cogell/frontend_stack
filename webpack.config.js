module.exports = {
  entry: './_src/index.js',
  output: {
    path: './_dist', // This is where images AND js will go
    publicPath: 'http://avant.org/', // This is used to generate URLs to e.g. images
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
    extensions: ['', '.js', '.json']
  },
  plugins: []
};
