'use strict';

var callBind = require('call-bind');
var define = require('define-properties');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var bound = callBind.apply(getPolyfill());

var rebindable = function of() {
	// eslint-disable-next-line no-invalid-this
	return bound(typeof this === 'undefined' ? Array : this, arguments);
};

define(rebindable, {
	'getPolyfill': getPolyfill,
	'implementation': implementation,
	'shim': shim
});

module.exports = rebindable;
