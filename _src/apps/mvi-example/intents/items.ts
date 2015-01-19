/// <reference path="../../../../lib.d/tsd.d.ts" />

import Rx = require('rx.lite');
import replicate = require('apps/mvi-example/utils/replicate');

var inputAddOneClicks$ = new Rx.Subject();
var inputAddManyClicks$ = new Rx.Subject();
var inputRemoveClicks$ = new Rx.Subject();
var inputItemColorChanged$ = new Rx.Subject();
var inputItemWidthChanged$ = new Rx.Subject();

function observe (ItemsView) {
  replicate(ItemsView.addOneClicks$, inputAddOneClicks$);
  replicate(ItemsView.addManyClicks$, inputAddManyClicks$);
  replicate(ItemsView.removeClicks$, inputRemoveClicks$);
  replicate(ItemsView.itemColorChanged$, inputItemColorChanged$);
  replicate(ItemsView.itemWidthChanged$, inputItemWidthChanged$);
}

var addItem$ = Rx.Observable.merge(
  inputAddOneClicks$.map(() => 1),
  inputAddManyClicks$.map(() => 1000)
);

var removeItem$ = inputRemoveClicks$.map((clickEvent: Event) => {
  return Number( (<HTMLInputElement>clickEvent.currentTarget).attributes['data-item-id'].value );
});

var colorChanged$ = inputItemColorChanged$
  .map(function (inputEvent: Event) {
    return {
      id: Number( (<HTMLInputElement>inputEvent.currentTarget).attributes['data-item-id'].value ),
      color: (<HTMLInputElement>inputEvent.currentTarget).value
    }
  });

var widthChanged$ = inputItemWidthChanged$
  .map(function (inputEvent: Event) {
    return {
      id: Number( (<HTMLInputElement>inputEvent.currentTarget).attributes['data-item-id'].value),
      width: Number( (<HTMLInputElement>inputEvent.currentTarget).value )
    }
  });

var toExport = {
  observe: observe,
  addItem$: addItem$,
  removeItem$: removeItem$,
  colorChanged$: colorChanged$,
  widthChanged$: widthChanged$
}

export = toExport;
