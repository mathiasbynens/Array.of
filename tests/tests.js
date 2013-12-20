var assert = require('assert');
var assertEquals = assert.equal;
var assertDeepEquals = assert.deepEqual;
var assertThrows = assert['throws'];

require('../array-of.js');

assertEquals(Array.of.length, 0);
assertEquals(Array.propertyIsEnumerable('of'), false);

assertDeepEquals(Array.of(undefined), [undefined]);
assertDeepEquals(Array.of(null), [null]);
assertDeepEquals(Array.of(false), [false]);
assertDeepEquals(Array.of(-Infinity), [-Infinity]);
assertDeepEquals(Array.of(-0), [-0]);
assertDeepEquals(Array.of(+0), [+0]);
assertDeepEquals(Array.of(1), [1]);
assertDeepEquals(Array.of(1, 2, 3), [1, 2, 3]);
assertDeepEquals(Array.of(+Infinity), [+Infinity]);
assertDeepEquals(Array.of({ '0': 'a', '1': 'b', '2': 'c', 'length': 3 }), [{ '0': 'a', '1': 'b', '2': 'c', 'length': 3 }]);
assertDeepEquals(Array.of(undefined, null, false, -Infinity, -0, +0, 1, 2, +Infinity), [undefined, null, false, -Infinity, -0, +0, 1, 2, +Infinity]);

// TODO: call, apply
