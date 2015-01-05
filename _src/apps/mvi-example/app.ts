/// <reference path="../../../lib.d/tsd.d.ts" />

import binder = require('apps/mvi-example/utils/binder');
import renderer = require('apps/mvi-example/renderer');
// import ItemsModel = require('apps/mvi-example/models/items');
// import ItemsView = require('apps/mvi-example/views/items');
// import ItemsIntent = require('apps/mvi-example/intents/items');

export function start() {
  // binder(ItemsModel, ItemsView, ItemsIntent);
  renderer.init();
}