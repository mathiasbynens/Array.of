/*! http://mths.be/array-of v0.1.0 by @mathias */
if (!Array.of) {
	(function() {
		'use strict';
		var defineProperty = (function() {
			// IE 8 only accepts DOM elements
			try {
				var o = {};
				var func = Object.defineProperty;
				var result = func(o, o, o) && func;
			} catch(e) { }
			return result;
		}());
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
				if (defineProperty) {
					defineProperty(result, index, {
						'value': value,
						'writable': true,
						'enumerable': true,
						'configurable': true
					});
				} else {
					result[index] = value;
				}
				++index;
			}
			result.length = length;
			return result;
		};
		if (defineProperty) {
			defineProperty(Array, 'of', {
				'value': of,
				'configurable': true,
				'writable': true
			});
		} else {
			Array.of = of;
		}
	}());
}
