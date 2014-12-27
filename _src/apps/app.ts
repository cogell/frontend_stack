/// <reference path="../../lib.d/lodash.d.ts" />

import _ = require('lodash');

module App {

  var firstName = function (names: Array<String>): String {
    return 'hello' + _.head(names);
  };

  export var start = function () {
    firstName(['cedric', 'cogell']);
  };

}