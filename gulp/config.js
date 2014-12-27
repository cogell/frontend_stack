var src  = '_src';
var dest = '_dist';
var lib  = 'node_modules';

module.exports = {
  src: src,
  dest: dest,

  copy: {
    src: [
      src + '/index.html'
    ],
    dest: dest
  },

  typescript: {
    src: src + '/**/*.ts',
    dest: dest,
    opts: {
      declarationFiles: false,
      noExternalResolve: false,
      sortOutput: true,
      module: 'commonjs', // not used
      target: 'ES5'
    }
  },

  concat: {
    // use typescript output stream as src
    dest: dest,
    output: 'app.min.js'
  },

  browser_sync: {
    server: {
      baseDir: [dest, lib, src]
    },
    files: [
      dest + '/**'
    ]
  }

};