var assert = require('assert');
var assertEquals = assert.equal;
var assertDeepEquals = assert.deepEqual;
var assertThrows = assert['throws'];

require('../array-of.js');

assertEquals(Array.of.length, 0);
assertEquals(Array.propertyIsEnumerable('of'), false);

assertDeepEquals(Array.of('abc'), ['abc']);
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

assertDeepEquals(Array.of.call(null, 'abc'), ['abc']);
assertDeepEquals(Array.of.call(null, undefined), [undefined]);
assertDeepEquals(Array.of.call(null, null), [null]);
assertDeepEquals(Array.of.call(null, false), [false]);
assertDeepEquals(Array.of.call(null, -Infinity), [-Infinity]);
assertDeepEquals(Array.of.call(null, -0), [-0]);
assertDeepEquals(Array.of.call(null, +0), [+0]);
assertDeepEquals(Array.of.call(null, 1), [1]);
assertDeepEquals(Array.of.call(null, 1, 2, 3), [1, 2, 3]);
assertDeepEquals(Array.of.call(null, +Infinity), [+Infinity]);
assertDeepEquals(Array.of.call(null, { '0': 'a', '1': 'b', '2': 'c', 'length': 3 }), [{ '0': 'a', '1': 'b', '2': 'c', 'length': 3 }]);
assertDeepEquals(Array.of.call(null, undefined, null, false, -Infinity, -0, +0, 1, 2, +Infinity), [undefined, null, false, -Infinity, -0, +0, 1, 2, +Infinity]);
assertDeepEquals(Array.of.call(Object, 1, 2, 3), { '0': 1, '1': 2, '2': 3, 'length': 3 });
var testObject = Object(3); testObject[0] = 1; testObject[1] = 2; testObject[2] = 3; testObject.length = 3;
assertDeepEquals(Array.of.call(Object, 1, 2, 3), testObject);
assertEquals(Array.of.call(Object).length, 0);
assertThrows(function() { Array.of.call(function() { return Object.freeze({}); }); }, TypeError);

assertDeepEquals(Array.of.apply(null, ['abc']), ['abc']);
assertDeepEquals(Array.of.apply(null, [undefined]), [undefined]);
assertDeepEquals(Array.of.apply(null, [null]), [null]);
assertDeepEquals(Array.of.apply(null, [false]), [false]);
assertDeepEquals(Array.of.apply(null, [-Infinity]), [-Infinity]);
assertDeepEquals(Array.of.apply(null, [-0]), [-0]);
assertDeepEquals(Array.of.apply(null, [+0]), [+0]);
assertDeepEquals(Array.of.apply(null, [1]), [1]);
assertDeepEquals(Array.of.apply(null, [1, 2, 3]), [1, 2, 3]);
assertDeepEquals(Array.of.apply(null, [+Infinity]), [+Infinity]);
assertDeepEquals(Array.of.apply(null, [{ '0': 'a', '1': 'b', '2': 'c', 'length': 3 }]), [{ '0': 'a', '1': 'b', '2': 'c', 'length': 3 }]);
assertDeepEquals(Array.of.apply(null, [undefined, null, false, -Infinity, -0, +0, 1, 2, +Infinity]), [undefined, null, false, -Infinity, -0, +0, 1, 2, +Infinity]);
assertDeepEquals(Array.of.apply(Object, [1, 2, 3]), { '0': 1, '1': 2, '2': 3, 'length': 3 });
var testObject = Object(3); testObject[0] = 1; testObject[1] = 2; testObject[2] = 3; testObject.length = 3;
assertDeepEquals(Array.of.apply(Object, [1, 2, 3]), testObject);
assertEquals(Array.of.apply(Object).length, 0);
assertThrows(function() { Array.of.apply(function() { return Object.freeze({}); }); }, TypeError);

// Ensure no setters are called for the indexes
var MyType = function() {};
Object.defineProperty(MyType.prototype, '0', {
	'set': function(x) {
		throw Error('Setter called: ' + x);
	}
});
assertDeepEquals(Array.of.call(MyType, 'abc'), { '0': 'abc', 'length': 1 });
