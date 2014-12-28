require.config({
  // dev gotcha the routes are actually pulling from /node_modules/... but the dev server is hosting node_modules at the root level
  paths: {
    'lodash': '/lodash/lodash'
  }
});