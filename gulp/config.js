var src  = '_src';
var dest = '_dist';

module.exports = {
  src: src,
  dest: dest,

  copy: {
    src: src + '/index.html',
    dest: dest
  },

  typescript: {
    src: src + '/**/*.ts',
    dest: dest
  },

  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    extensions: [],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/apps.js', // stream from typescript task
      dest: dest,
      outputName: 'app.js'
    }]
  }

};