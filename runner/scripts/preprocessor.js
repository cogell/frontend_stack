var ReactTools = require('react-tools');

module.exports = {
  process: function(src, path) {
    // ignore required style files
    if (path.match(/\.style/) ) {
      src = '';
    }

    // if path ends in .js then do jsx transform on it
    if (path.match(/\.js?$/)) {
      src = ReactTools.transform(src);
    }

    return src;
  }
};
