'use strict';

var assign = require('object.assign');

module.exports = function (of, t) {
	t.test('nullish receiver', function (st) {
		st.deepEqual(of.call(undefined, 1), [1]);
		st.deepEqual(of.call(null, 2), [2]);
		st.end();
	});

	var arrayLikeObject = { '0': 1, '1': 2, '2': 3, 'length': 3 };

	t.deepEquals(of('abc'), ['abc']);
	t.deepEquals(of(undefined), [undefined]);
	t.deepEquals(of(null), [null]);
	t.deepEquals(of(false), [false]);
	t.deepEquals(of(-Infinity), [-Infinity]);
	t.deepEquals(of(-0), [-0]);
	t.deepEquals(of(+0), [+0]);
	t.deepEquals(of(1), [1]);
	t.deepEquals(of(1, 2, 3), [1, 2, 3]);
	t.deepEquals(of(Infinity), [Infinity]);
	t.deepEquals(of({ '0': 'a', '1': 'b', '2': 'c', 'length': 3 }), [{ '0': 'a', '1': 'b', '2': 'c', 'length': 3 }]);
	t.deepEquals(of(undefined, null, false, -Infinity, -0, 0, 1, 2, Infinity), [undefined, null, false, -Infinity, -0, 0, 1, 2, Infinity]);

	t.deepEquals(of.call(null, 'abc'), ['abc']);
	t.deepEquals(of.call(null, undefined), [undefined]);
	t.deepEquals(of.call(null, null), [null]);
	t.deepEquals(of.call(null, false), [false]);
	t.deepEquals(of.call(null, -Infinity), [-Infinity]);
	t.deepEquals(of.call(null, -0), [-0]);
	t.deepEquals(of.call(null, +0), [+0]);
	t.deepEquals(of.call(null, 1), [1]);
	t.deepEquals(of.call(null, 1, 2, 3), [1, 2, 3]);
	t.deepEquals(of.call(null, Infinity), [Infinity]);
	t.deepEquals(of.call(null, { '0': 'a', '1': 'b', '2': 'c', 'length': 3 }), [{ '0': 'a', '1': 'b', '2': 'c', 'length': 3 }]);
	t.deepEquals(of.call(null, undefined, null, false, -Infinity, -0, 0, 1, 2, Infinity), [undefined, null, false, -Infinity, -0, 0, 1, 2, Infinity]);
	t.deepEquals(of.call(Object, 1, 2, 3), assign(Object(3), { '0': 1, '1': 2, '2': 3, 'length': 3 }));
	t.deepEquals(of.call(Object, 1, 2, 3), assign(Object(arrayLikeObject.length), arrayLikeObject));
	t.equal(of.call(Object).length, 0);

	t.deepEquals(of.apply(null, ['abc']), ['abc']);
	t.deepEquals(of.apply(null, [undefined]), [undefined]);
	t.deepEquals(of.apply(null, [null]), [null]);
	t.deepEquals(of.apply(null, [false]), [false]);
	t.deepEquals(of.apply(null, [-Infinity]), [-Infinity]);
	t.deepEquals(of.apply(null, [-0]), [-0]);
	t.deepEquals(of.apply(null, [0]), [0]);
	t.deepEquals(of.apply(null, [1]), [1]);
	t.deepEquals(of.apply(null, [1, 2, 3]), [1, 2, 3]);
	t.deepEquals(of.apply(null, [Infinity]), [Infinity]);
	t.deepEquals(of.apply(null, [{ '0': 'a', '1': 'b', '2': 'c', 'length': 3 }]), [{ '0': 'a', '1': 'b', '2': 'c', 'length': 3 }]);
	t.deepEquals(of.apply(null, [undefined, null, false, -Infinity, -0, 0, 1, 2, Infinity]), [undefined, null, false, -Infinity, -0, +0, 1, 2, Infinity]);
	t.deepEquals(of.apply(Object, [1, 2, 3]), assign(Object(3), { '0': 1, '1': 2, '2': 3, 'length': 3 }));
	t.deepEquals(of.apply(Object, [1, 2, 3]), assign(Object(arrayLikeObject.length), arrayLikeObject));

	t.equal(of.apply(Object).length, 0);

	t.test('frozen', { 'skip': !Object.freeze }, function (st) {
		st['throws'](
			function () { of.call(function () { return Object.freeze({}); }); },
			TypeError
		);
		st['throws'](
			function () { of.apply(function () { return Object.freeze({}); }); },
			TypeError
		);
		st.end();
	});

	t.test('setters', { 'skip': !Object.defineProperty }, function (st) {
		// Ensure no setters are called for the indexes
		var MyType = function () {};
		var expected = assign(new MyType(), { '0': 'abc', 'length': 1 });

		Object.defineProperty(MyType.prototype, '0', {
			'set': function (x) {
				throw new SyntaxError('Setter called: ' + x);
			}
		});

		st.deepEquals(of.call(MyType, 'abc'), expected);
		st.end();
	});
};
