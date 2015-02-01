/// <reference path="../../../lib.d/tsd.d.ts" />

import h             = require('h');
import diff          = require('diff');
import patch         = require('patch');
import createElement = require('create-element');

// from: https://github.com/Matt-Esch/virtual-dom

function render(count) {
  return h('div', {
      style: {
        textAlign: 'center',
        lineHeight: (100 + count)+ 'px',
        width: (100 + count)+ 'px',
        height: (100 + count)+ 'px',
        border: '1px solid red'
      }
    }, String(count));
}

var count = 0;

var tree = render(count);
var rootNode = createElement(tree);
document.body.appendChild(rootNode);

function renderStep(){
  count++;

  var newTree = render(count);
  var patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
  tree = newTree;
}

setInterval( renderStep, 1000);
