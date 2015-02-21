# Decisions Context

## Not to use Babel tranpiler
- eslint didn't catch imported vars and marked them as undef
- flow typecheck didn't understand import declaration "Failure("Unimplemented: ImportDeclaration")"
- small slow down in webpack compile time due to babel transformations


## Flow over Typescript
- flow is much faster
- typescript doesn't understand jsx
- typescript doesn't support many es6 features yet


## <Nothing> over Flow
- couldn't get simple react code (from tutorials) to typecheck without errors
- documentation on flow is sooooo sparse
- no/small community support at the moment


## ESLint over JSHint
- eslint supports jsx
- eslint supports es6
- eslint sublime plugin doesnt require global install of eslint module
- eslint has custom plugin support
- eslint has more options


## Webpack over AMD
- webpack was faster to setup
- webpack reduced gulp tasks dramtically
- webpack gives us ability to require and bundle styles in js code
- webpack has good jsx support
