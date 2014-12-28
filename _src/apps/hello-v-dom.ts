/// <reference path="../../lib.d/_app.d.ts" />

import h             = require('../libs/h');
import diff          = require('../libs/diff');
import patch         = require('../libs/patch');
import createElement = require('../libs/create-element');

function render(count) {
  return h('div', {
      style: {
        textAlign: 'center',
        lineHeight: (100 + count)+ 'px',
        width: (100 + count)+ 'px',
        height: (100 + count)+ 'px',
        border: '1px solid red'
      }
    }, [String(count)]);
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