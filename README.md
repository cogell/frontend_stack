# Frontend Stack

## Libraries > Frameworks

- [you have ruined javascript](http://codeofrob.com/entries/you-have-ruined-javascript.html)

- [No more JS frameworks](http://bitworking.org/news/2014/05/zero_framework_manifesto)

- [The State of Javascript in 2015](http://www.breck-mckye.com/blog/2014/12/the-state-of-javascript-in-2015/)

## Libraries


### Typescript

- optional typing
- ES6 features


### Streams & Pipes

- Gulp
- RxJS (or bacon.js)


### Functional

- [lo_dash](https://lodash.com/)
- [Ramda](http://ramdajs.com/)


### Task Runner: Gulp

I dont care what you use but use something even just npm scripts are cool.  I prefer Gulp.


### Module Bundling
tl;dr no obvious choice. I chose requirejs.

While Typescript allows us to write ES6 style modules we still need to load those modules with something that works today. Note Typescript does not support transpiling to ES6 module code so we cannot use a ES6 module loader polyfill script like [SystemJS](https://github.com/systemjs/systemjs).

Sooo, we got to choice between:
- [requirejs](http://requirejs.org/)
- [browserify](http://browserify.org/)
- [systemjs](https://github.com/systemjs/systemjs)
- [assetgraph-builder](https://github.com/assetgraph/assetgraph-builder)

Each has its +'s and -'s.  Let's take a quick look:

####requirejs

Pros:
- async module loading
- similar setup to SystemJS
- no need for bundle step in developement (fast dev'ing)
- support for circular dependencies (WTF would do that? MVI architecture pattern anyone?)

Cons:
- lots of config boiler plate for each dependecy
- extra indention level when writing vanialla (non-issue for us when using Typescript)
- r.js can be extremely frustrating

####browserify

Pros:
- simple commonjs module pattern like nodejs (non-issue for use when using Typescript)
- good community support

Cons:
- need to bundle with every code change in development
- huge gotcha when trying to require browserify bundles (don't forget to de-require that bundle first -- cause that makes sense???)

####systemjs w/ jspm

This bugger is so new I thought I'd include a good reference project [guybedford/react-jspm-es6-gulp-example](https://github.com/guybedford/react-jspm-es6-gulp-example).

Pros:
- use ES6 modules today!
- has its own package loader, jspm (that might be a con for some)
- single line of code to include external modules (with jspm)

Cons:
- very young (but what javascript project isn't?)
- (not systemjs' fault) cannot be used with Typescript yet

####assetgraph-builder

Pros:
- no need for bundle step in developement (fast dev'ing)
- 'if it works in the browser then it'll get bundled'

Cons:
- (personal) never used it
- no module support


## Keywords
- [MVI](http://futurice.com/blog/reactive-mvc-and-the-virtual-dom)
- [ES6](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29)


## TODOs

- add clean task
- add libsass task