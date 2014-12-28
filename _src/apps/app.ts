/// <reference path="../../lib.d/_app.d.ts" />

import _ = require('lodash');
// import hello = require('./hello-v-dom');

function firstName(names: Array<String>): String {
  return 'hello ' + _.head(names);
};

export function start () {
  console.log( firstName(['cedric', 'cogell']) );
  hello();
};
