# Frontend Stack

## Libraries > Frameworks

- [Removing User Interface Complexity, or Why React is Awesome](http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome)

- [you have ruined javascript](http://codeofrob.com/entries/you-have-ruined-javascript.html)

- [No more JS frameworks](http://bitworking.org/news/2014/05/zero_framework_manifesto)

- [The State of Javascript in 2015](http://www.breck-mckye.com/blog/2014/12/the-state-of-javascript-in-2015/)

## Architecture
If we are going to choose a collection of libraries to use over a framework or two then we need to be upfront and clear about the architecture of each project.

tl;dr no one size fits all, just like no one framework to rule them all

### Arch: Decouple Components from Pages (unfinished)
- noticed this problem working on avant, wanted to create a view request API. but what would be even better would be components that knew how to render themselves like React, Web Components, Angular Directives, etc


## Features

mori
virtual-dom
rx
ajax?
router?
local storage?

## Libraries

### Typescript

- optional typing
- ES6 features
- [lang spec](http://www.typescriptlang.org/Content/TypeScript%20Language%20Specification.pdf)


### Async Operations

- Callbacks: *please don't*
- Promises: ES6 Promises, q promise library
- Generators?: ES6, Regenerator transpiler
- Channels: js-csp
- Streams: RxJS (or bacon.js)


### Functional

You have no good reason (anymore) not to use lodash (unless you are working on a legacy version of Backbone/NodeJS, then maybe).

- [lo_dash](https://lodash.com/)
- [Ramda](http://ramdajs.com/)
- [underscore](http://underscorejs.org/)


### Immutable Data

- [mori](https://github.com/swannodette/mori)
- [immutablejs](https://github.com/facebook/immutable-js)


### Task Runner

I dont care what you use but use something even just npm scripts are cool.  I chose Gulp.


### Module Bundling
tl;dr no obvious choice. I chose requirejs.

While Typescript allows us to write ES6 style modules we still need to load those modules with something that works today. Note Typescript does not support transpiling to ES6 module code so we cannot use a ES6 module loader polyfill script like [SystemJS](https://github.com/systemjs/systemjs).

Sooo, we got to choice between:
- "vanilla" choice of concatenation
- [requirejs](http://requirejs.org/)
- [browserify](http://browserify.org/)
- [systemjs](https://github.com/systemjs/systemjs)
- [assetgraph-builder](https://github.com/assetgraph/assetgraph-builder)
- [webpack]()

Each has its +'s and -'s.  For a deeper look at each check out: [link to internal doc]().

### CSS/Styling

huge huge, mess. tons of solutions and they all don't serve all the problems of CSS

From @vjeux's [React: CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js)
> Problems with CSS:
> - global namespace
> - dependencies
> - dead code elimination
> - minification
> - sharing constants
> - non-deterministic resolution
> - isolation

DSL's To Chose From:
- Sass
- Less
- Stylus
- Javascript

I wanna try: [restyle](https://github.com/WebReflection/restyle)

## Keywords
- [MVI](http://futurice.com/blog/reactive-mvc-and-the-virtual-dom)
- [ES6](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29)


## TODOs
- spike running dev tasks in docker

- spike Flow
- spike css in components
  - webpack
  - requirejs css require
  - restyle

- add RxJS (react-extensions) library
- add types to virtual-dom libraries?
- make PR for virtual-dom amd dist?
- add css imports into amd??
- add libsass task

### Task Runner
- renaming js files do not get picked up by watcher
- figure out how to share/merge streams across tasks (perhaps each task outputs a 'runner' function)
