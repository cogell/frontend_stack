var src  = '_src';
var dest = '_dist';
var bundleDest = dest + '/libs';
var nodeModules = 'node_modules';
var vDOM = './' + nodeModules + '/virtual-dom';

module.exports = {
  src: src,
  dest: dest,

  copy: [
    {
      src: [
        src + '/index.html',
        src + '/index.js',
        src + '/require.config.js',
        'node_modules/requirejs/require.js'
      ],
      dest: dest
    }
  ],

  typescript: {
    src: [
      // src + '/**/*.ts',
      src + '/apps/css-in-js-test/**/*.ts',
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
      baseDir: [ dest, nodeModules]
    },
    files: [
      dest + '/**'
    ]
  },

  clean: {
    delete: [ dest ]
  },

  browserify: {
    // A separate bundle will be generated for each item in the bundleConfigs array
    bundleConfigs: [{
      // virtual-dom/h
      entries: vDOM + '/h.js',
      dest: bundleDest,
      standalone: 'h',
      outputName: 'h.js'
    }, {
      // virtual-dom/diff
      entries: vDOM + '/diff.js',
      dest: bundleDest,
      standalone: 'diff',
      outputName: 'diff.js'
    }, {
      // virtual-dom/patch
      entries: vDOM + '/patch.js',
      dest: bundleDest,
      standalone: 'patch',
      outputName: 'patch.js'
    }, {
      // virtual-dom/diff
      entries: vDOM + '/create-element.js',
      dest: bundleDest,
      standalone: 'create-element',
      outputName: 'create-element.js'
    }, {
      // dom-delegator
      entries: './' + nodeModules + '/dom-delegator/dom-delegator.js',
      dest: bundleDest,
      standalone: 'dom-delegator',
      outputName: 'dom-delegator.js'
    }]
  }

};
