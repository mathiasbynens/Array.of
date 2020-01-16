'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof Array.of === 'function') {
		// Detects a bug in Webkit nightly r181886
		var Foo = function Foo(len) {
			this.length = len;
		};
		Foo.prototype = [];
		var fooArr = Array.of.apply(Foo, [1, 2]);
		if (fooArr instanceof Foo && fooArr.length === 2) {
			return Array.of;
		}
	}
	return implementation;
};
