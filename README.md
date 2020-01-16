# array.of <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES2015 spec-compliant `Array.of` shim. Invoke its "shim" method to shim `Array.of` if it is unavailable or noncompliant.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-array.of).

Most common usage:
```js
var assert = require('assert');
var arrayOf = require('array.of');

assert.deepEqual(arrayOf(1, 2, 3), [1, 2, 3]);

if (!Array.of) {
	arrayOf.shim();
}

assert.deepEqual(Array.of(1, 2, 3), [1, 2, 3]);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

[package-url]: https://npmjs.com/package/array.of
[npm-version-svg]: http://versionbadg.es/mathiasbynens/Array.of.svg
[travis-svg]: https://travis-ci.org/mathiasbynens/Array.of.svg
[travis-url]: https://travis-ci.org/mathiasbynens/Array.of
[deps-svg]: https://david-dm.org/mathiasbynens/Array.of.svg
[deps-url]: https://david-dm.org/mathiasbynens/Array.of
[dev-deps-svg]: https://david-dm.org/mathiasbynens/Array.of/dev-status.svg
[dev-deps-url]: https://david-dm.org/mathiasbynens/Array.of#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/array.of.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/array.of.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/array.of.svg
[downloads-url]: http://npm-stat.com/charts.html?package=array.of
