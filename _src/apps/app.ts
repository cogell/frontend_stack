/// <reference path="other_app.ts" />
/// <reference path="../../lib.d/_app.d.ts" />

// import _ = require('lodash');
// import otherApp = require('other_app');

module App {

  var firstName = function (names: Array<String>) {
    // return 'hello' + _.head(names);
    console.log('I was called!');
  };

  export function start() {
    firstName(['cedric', 'cogell']);
  };

}

App.start();