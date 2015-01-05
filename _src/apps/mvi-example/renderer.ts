/// <reference path="../../../lib.d/tsd.d.ts" />

import h = require('h');
import diff = require('diff');
import patch = require('patch');
import createElement = require('create-element');

import DOMDelegator = require('dom-delegator');
import ItemsView = require('apps/mvi-example/views/items');

var delegator;
var VDOM = {
  createElement: createElement,
  diff: diff,
  patch: patch
};

function renderVTreeStream(vtree$, containerSelector) {
  // find and prepare the container
  var container = <HTMLElement>window.document.querySelector(containerSelector);
  if (container === null) {
    console.error('Couldn\'t render into unknown \'' + containerSelector + '\'');
    return false;
  }

  container.innerHTML = '';

  // make the DOME node bound to the VDOM node
  var rootNode = <HTMLElement>window.document.createElement('div');
  container.appendChild(rootNode);
  vtree$.startWith(h())
    .bufferWithCound(2,1)
    .subscribe(function (buffer){
      try {
        var oldVTree = buffer[0];
        var newVTree = buffer[1];
        rootNode = VDOM.patch(rootNode, VDOM.diff(oldVTree, newVTree));
      } catch (err) {
        console.error(err);
      }
    });

  return true;
}

export function init() {
  delegator = new DOMDelegator();
  renderVTreeStream(ItemsView.vtree$, '.js-container');
}

