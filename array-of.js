/*! http://mths.be/array-of v0.1.0 by @mathias */
if (!Array.of) {
	(function() {
		var isConstructor = function(Constructor) {
			try {
				new Constructor();
				return true;
			} catch(_) {
				return false;
			}
		};
		var of = function() {
			var items = arguments;
			var len = items.length;
			var C = this;
			var A = isConstructor(C) ? new C(len) : new Array(len);
			var k = 0;
			while (k < len) {
				var kValue = items[k];
				A[k] = kValue;
				++k;
			}
			return A;
		};
		if (Object.defineProperty) {
			Object.defineProperty(Array, 'of', {
				'value': of,
				'configurable': true,
				'writable': true
			});
		} else {
			Array.of = of;
		}
	}());
}
