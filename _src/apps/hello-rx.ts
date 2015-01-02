/// <reference path="../../lib.d/tsd.d.ts" />

import Rx = require('rx.lite');

document.addEventListener('DOMContentLoaded', main);

function main () {

  // from: https://github.com/Reactive-Extensions/RxJS/blob/master/examples/simpledatabinding/simpledatabinding.js

  var header = document.querySelector('#helloRx');
  var hello = new Rx.BehaviorSubject('Hello');

  hello.subscribe((text) => {
    header.textContent = text
  });

  // Create simple bindings for first and last name
  var firstName = new Rx.BehaviorSubject('');
  var lastName = new Rx.BehaviorSubject('');

  // Create first and last name composite
  var fullName = firstName.combineLatest(lastName,
    (first, last) => first + ' ' + last
  );

  // Subscribe to them all
  var fn = <HTMLInputElement>document.querySelector('#firstName');
  firstName.subscribe((text) => {fn.value = text});

  var ln = <HTMLInputElement>document.querySelector('#lastName');
  lastName.subscribe((text) => {ln.value = text});

  var full = <HTMLInputElement>document.querySelector('#lastName');
  fullName.subscribe((text) => {full.value = text});

  // Create two way bindings for both first name and last name
  Rx.Observable.fromEvent(fn, 'keyup')
    .subscribe((e: Event) => {
      console.log('keyup on firstName');
      firstName.onNext( (<HTMLInputElement>e.target).value )
    });

  Rx.Observable.fromEvent(ln, 'keyup')
    .subscribe((e: Event) => {
      lastName.onNext( (<HTMLInputElement>e.target).value )
    });

}