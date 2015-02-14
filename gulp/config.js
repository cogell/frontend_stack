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
      src: src + '/index.html',
      dest: dest
    },
    {
      src: 'node_modules/requirejs/require.js',
      dest: dest
    },
    {
      src: src + '/*.js',
      dest: dest
    }
  ],

  javascript: {
    src: [
      src + '/apps/**/*.js',
      src + '/apps/**/*.jsx'
    ],
    dest: dest + '/apps',
    watch: {
      task: 'javascript'
    }
  },

  jsx: {
    src: [
      src + '/apps/**/*.jsx'
    ],
    dest: dest + '/apps',
  },

  wrap: {
    src: [
      src + '/apps/**/*.js'
    ],
    dest: dest + '/apps',
    wrapText: 'define(function(require){\n <%= contents %> \n});'
  },

  typescript: {
    src: [
      src + '/apps/app.ts',
      src + '/apps/react/**/*.ts',
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
    src: [ dest ]
  },

  browserify: {
    // causes this task not to run
    noop: true,
    // A separate bundle will be generated for each item in the bundleConfigs array
    bundleConfigs: [{
      // csp library
      entries: './' + nodeModules + '/js-csp/src/csp.js',
      dest: bundleDest,
      standalone: 'csp',
      outputName: 'csp.js'
    },{
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
