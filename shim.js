'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');

module.exports = function shimArrayOf() {
	var polyfill = getPolyfill();
	define(Array, { 'of': polyfill }, {
		'of': function testArrayOf() {
			return Array.of !== polyfill;
		}
	});
	return polyfill;
};
