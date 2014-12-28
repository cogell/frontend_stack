var src  = '_src';
var dest = '_dist';
var nodeModules = 'node_modules';
var vDOM = '/' + nodeModules + '/virtual-dom';

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
    src: [
      src + '/**/*.ts',
      'lib.d/**'
    ],
    dest: dest,
    opts: {
      declarationFiles: false,
      noExternalResolve: true,
      sortOutput: false,
      module: 'amd',
      target: 'ES5'
    }
  },

  browser_sync: {
    server: {
      baseDir: [ dest, nodeModules],
    },
    files: [
      dest + '/**'
    ]
  },

  clean: {
    delete: [ dest ]
  },

  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      // virtual-dom/h
      entries: vDOM + '/h.js',
      dest: dest,
      outputName: 'h.js'
    }, {
      // virtual-dom/diff
      entries: vDOM + '/diff.js',
      dest: dest,
      outputName: 'diff.js'
    }]
  }

};