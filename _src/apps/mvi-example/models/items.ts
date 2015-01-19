/// <reference path="../../../../lib.d/tsd.d.ts" />

import Rx = require('rx.lite');
import replicate = require('apps/mvi-example/utils/replicate');

interface Item {
  id: number;
  color: string;
  width: number;
}

var intentAddItem$ = new Rx.Subject();
var intentRemoveItem$ = new Rx.Subject();
var intentWidthChanged$ = new Rx.Subject();
var intentColorChanged$ = new Rx.Subject();

// boilerplate copying of intent streams
function observe(ItemsIntent) {
  replicate(ItemsIntent.addItem$, intentAddItem$);
  replicate(ItemsIntent.removeItem$, intentRemoveItem$);
  replicate(ItemsIntent.widthChanged$, intentWidthChanged$);
  replicate(ItemsIntent.colorChanged$, intentColorChanged$);
}

// helper functions
function createRandomItem() {
  var hexColor = Math.floor(Math.random() * 16777215).toString(16);
  while(hexColor.length < 6){
    hexColor = '0' + hexColor;
  }
  hexColor = '#' + hexColor;
  var randomWidth = Math.floor(Math.random() * 800 + 200);
  return {
    // id: 0,
    color: hexColor,
    width: randomWidth
  };
}

function reassignId(item, index) {
  return {
    id: index,
    color: item.color,
    width: item.width
  };
}

// intent streams into modification streams that all return a function to act on the items

// create a new item array and fill it with random items
// then return a function that returns the listItems with the new items and given new ids
var addItemMod$ = intentAddItem$.map(function (amount: Number){
  var newItems = [];
  for (var i=0; i<amount; i++){
    newItems.push(createRandomItem());
  }
  return function (listItems: Item[]){
    return listItems.concat(newItems).map(reassignId);
  };
});

// returns a function that returns the listItems filtering out all items with a certain id then gives all the items new ids
var removeItemMod$ = intentRemoveItem$.map(function (id: Number) {
  return function (listItems: Item[]) {
    return listItems
      .filter( (item) => item.id !== id )
      .map(reassignId);
  };
});

// returns a function that returns the listItems with updated colors
var colorChangedMod$ = intentColorChanged$.map(function (x: Item) {
  return function (listItems: Item[]) {
    listItems[x.id].color = x.color;
    return listItems;
  };
});

var widthChangedMod$ = intentWidthChanged$.map(function (x: Item) {
  return function (listItems: Item[]) {
    listItems[x.id].width = x.width;
    return listItems;
  };
});

// combine all the modification streams in to one stream
var itemModifications = addItemMod$.merge(removeItemMod$).merge(colorChangedMod$).merge(widthChangedMod$);

var items$ = itemModifications
  .startWith( <Item[]>[{id: 0, color: 'red', width: 300}] )
  .scan(function (listItems, modification) {
    return modification(listItems);
  });

var toExport = {
  observe: observe,
  items$: items$
}
