var src = '_src';
var dest = '_dist';

module.exports = {
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

  browser_sync: {
    server: {
      baseDir: [ dest]
    },
    files: [
      dest + '/**'
    ]
  },

  clean: {
    src: [ dest ]
  }

};
