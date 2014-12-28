/// <reference path="../../lib.d/_app.d.ts" />

import h             = require('virtual-dom/h');
import diff          = require('virtual-dom/diff');
import patch         = require('virtual-dom/patch');
import createElement = require('virtual-dom/create-element');

function render(count) {
  return h('div', {
      style: {
        border: '1px solid red'
      }
    }, [String(count)]);
}

var count = 0;

var tree = render(count);
var rootNode = createElement(tree);
document.body.appendChild(rootNode);

function renderStep(){
  console.log('count fired');

  count++;

  var newTree = render(count);
  var patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
  tree = newTree;
}

export function start(){
  setInterval( renderStep, 1000)
};