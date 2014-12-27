/// <reference path="../../lib.d/lodash.d.ts" />

import _ = require('lodash');

var firstName = function (names: Array<String>): String {
  return _.head(names);
};

firstName(['cedric', 'cogell']);