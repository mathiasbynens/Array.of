'use strict';

var of = require('../');
of.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Array.of.length, 0, 'Array.of has a length of 0');
	t.test('Function name', { 'skip': !functionsHaveNames }, function (st) {
		st.equal(Array.of.name, 'of', 'Array.of has name "of"');
		st.end();
	});

	t.test('enumerability', { 'skip': !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Array, 'of'), 'Array.of is not enumerable');
		et.end();
	});

	runTests(function () {
		return Array.of.apply(this, arguments); // eslint-disable-line no-invalid-this
	}, t);

	t.end();
});
