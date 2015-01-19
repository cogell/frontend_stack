/// <reference path="../../../../lib.d/tsd.d.ts" />

import Rx = require('rx.lite');
import h = require('h');
import replicate = require('apps/mvi-example/utils/replicate');
import ItemsModel = require('apps/mvi-example/models/items');

var modelItems$ = new Rx.BehaviorSubject(null); // behavior subject caches last value and starts with a specified value
var itemWidthChanged$ = new Rx.Subject(); // subject is a observer and observable packaged together
var itemColorChanged$ = new Rx.Subject();
var removeClicks$ = new Rx.Subject();
var addOneClicks$ = new Rx.Subject();
var addManyClicks$ = new Rx.Subject();

// Q. why create a copy of the ItemsModel.items$ into a local var?
// A. maybe so we dont modify the orig?
function observe(ItemsModel) {
  replicate(ItemsModel.items$, modelItems$);
}

function vrenderTopButtons() {
  // div.topButtons
  //  button{Add New Item}
  //  button{Add Many Items}

  return h('div.topButtons', {}, [
    h('button',
      { 'ev-click': (ev) => { addOneClicks$.onNext(ev)} },
      'Add New Item'
    ),
    h('button',
      { 'ev-click': (ev) => { addOneClicks$.onNext(ev)} },
      'Add Many Items'
      )
  ]);
}

// why do we need to attach data-item-id's to all the elements?
// still might be usefull to pull out static styles into css/sass files
// do these styles get applied in line??
function vrenderItem(itemData){
  // div
  //  input
  //  div
  //    input
  //  div{itemData.width}
  //  button{Remove}

  return h('div',
    {
      style: {
        'border': '1px solid #000',
        'background': 'none repeat scroll 0% 0%' + itemData.color,
        'width': itemData.width + 'px',
        'height': '70px',
        'display': 'block',
        'padding': '20px',
        'margin': '10px 0px'
      }
    },
    [
      h('input', {
        type: 'text',
        value: itemData.color,
        attributes: {
          'data-item-id': itemData.id
        },
        'ev-input': (ev) => { itemColorChanged$.onNext(ev); }
      }),
      h('div', [
        h('input', {
          type: 'range',
          min: '200',
          max: '1000',
          value: itemData.width,
          attributes: {
            'data-item-id': itemData.id
          },
          'ev-input': (ev) => { itemWidthChanged$.onNext(ev); }
        })
      ]),
      h('div', String(itemData.width)),
      h('button', {
        attributes: {
          'data-item-id': itemData.id
        },
        'ev-click': (ev) => { removeClicks$.onNext(ev); }
      }, 'Remove')
    ]
  );
}

var vtree$ = modelItems$.map(function (itemsData) {
  return h('div.everything', {}, [
    vrenderTopButtons(),
    itemsData.map(vrenderItem)
  ]);
});

var toExport = {
  observe: observe,
  vtree$: vtree$,
  removeClicks$: removeClicks$,
  addOneClicks$: addOneClicks$,
  addManyClicks$: addManyClicks$,
  itemColorChanged$: itemColorChanged$,
  itemWidthChanged$: itemWidthChanged$,
}

export = toExport;
