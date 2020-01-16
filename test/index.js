'use strict';

var values = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(values, t);

	t.end();
});
