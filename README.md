# ES6 `Array.of` polyfill [![Build status](https://travis-ci.org/mathiasbynens/Array.of.svg?branch=master)](https://travis-ci.org/mathiasbynens/Array.of)

An robust & optimized ES3-compatible polyfill for [the `Array.of` method in ECMAScript 6](https://mths.be/es6#sec-array.of).

## Installation

In a browser:

```html
<script src="array-of.js"></script>
```

Via [npm](https://www.npmjs.com/):

```bash
npm install array.of
```

Then, in [Node.js](https://nodejs.org/):

```js
require('array.of');

// On Windows and on Mac systems with default settings, case doesn’t matter,
// which allows you to do this instead:
require('Array.of');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This polyfill is available under the [MIT](https://mths.be/mit) license.
