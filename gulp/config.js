var src  = '_src';
var dest = '_dist';
var lib  = 'node_modules';

module.exports = {
  src: src,
  dest: dest,

  copy: {
    src: [
      src + '/index.html',
      src + '/index.js',
      src + '/require.config.js',
      'node_modules/requirejs/require.js'
    ],
    dest: dest
  },

  typescript: {
    src: src + '/**/*.ts',
    dest: dest,
    opts: {
      declarationFiles: false,
      noExternalResolve: false,
      sortOutput: false,
      module: 'amd',
      target: 'ES5'
    }
  },

  browser_sync: {
    server: {
      baseDir: ["_dist", "node_modules"],
    },
    files: [
      dest + '/**'
    ]
  }

};