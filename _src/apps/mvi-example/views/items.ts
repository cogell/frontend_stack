import Rx = require('rx.lite');
import h = require('h');
// import replicate = require('apps/mvi-example/utils/replicate');

var modelItems$ = new Rx.BehaviorSubject(null);

export var vtree$ = modelItems$;

// export = {
//   vtree$: vtree$
// }