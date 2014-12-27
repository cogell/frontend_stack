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
  }

};