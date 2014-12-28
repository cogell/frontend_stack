/// <reference path="../../lib.d/lodash.d.ts" />

import _ = require('lodash');

var firstName = function (names: Array<String>): String {
  return 'hello ' + _.head(names);
};

export var start = function () {
  console.log( firstName(['cedric', 'cogell']) );
};
