/*! http://mths.be/array-of v0.1.0 by @mathias */
if (!Array.of) {
	(function() {
		var slice = [].slice;
		var of = function() {
			return slice.call(arguments);
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
