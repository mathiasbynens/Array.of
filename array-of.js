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
			var length = items.length;
			var Me = this;
			var result = isConstructor(Me) ? new Me(length) : new Array(length);
			var index = 0;
			var value;
			while (index < length) {
				value = items[index];
				result[index] = value;
				++index;
			}
			return result;
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
