var assert = require('assert');
var assertEquals = assert.equal;
var assertThrows = assert['throws'];

require('../array-of.js');

assertEquals(Array.of.length, 0);
assertEquals(Array.propertyIsEnumerable('of'), false);

// TODO
