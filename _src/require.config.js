require.config({
  // dev gotcha the routes are actually pulling from /node_modules/... but the dev server is hosting node_modules at the root level
  paths: {
    'lodash': '/lodash/lodash',
    'rx.lite': '/rx/dist/rx.lite',

    // bundled with browserify
    'h': '/libs/h',
    'diff': '/libs/diff',
    'patch': '/libs/patch',
    'create-element': '/libs/create-element'
  }
});