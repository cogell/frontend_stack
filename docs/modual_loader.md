# Javascript Modual Loaders

## requirejs

Pros:
- async module loading
- similar setup to SystemJS
- no need for bundle step in developement (fast dev'ing)
- support for circular dependencies (WTF would do that? MVI architecture pattern anyone?)

Cons:
- lots of config boiler plate for each dependecy
- extra indention level when writing vanialla (non-issue for us when using Typescript)
- r.js can be extremely frustrating

## browserify

Pros:
- simple commonjs module pattern like nodejs (non-issue for use when using Typescript)
- good community support

Cons:
- need to bundle with every code change in development
- huge gotcha when trying to require browserify bundles (don't forget to de-require that bundle first -- cause that makes sense???)

## systemjs w/ jspm

This bugger is so new I thought I'd include a good reference project [guybedford/react-jspm-es6-gulp-example](https://github.com/guybedford/react-jspm-es6-gulp-example).

Pros:
- use ES6 modules today!
- has its own package loader, jspm (that might be a con for some)
- single line of code to include external modules (with jspm)

Cons:
- very young (but what javascript project isn't?)
- (not systemjs' fault) cannot be used with Typescript yet

## assetgraph-builder (never used it)

Pros:
- no need for bundle step in developement (fast dev'ing)
- 'if it works in the browser then it'll get bundled'

Cons:
- no module support

## webpack (never used it)

Pros:
- lots of cool loaders for requiring styles, imgs, fonts, etc
- can replace a lot of gulp tasks

Cons:
