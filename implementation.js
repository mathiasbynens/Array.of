'use strict';

var ArrayCreate = require('es-abstract/2023/ArrayCreate');
// var Construct = require('es-abstract/2023/Construct');
var CreateDataPropertyOrThrow = require('es-abstract/2023/CreateDataPropertyOrThrow');
var IsConstructor = require('es-abstract/2023/IsConstructor');
var Set = require('es-abstract/2023/Set');
var ToString = require('es-abstract/2023/ToString');

module.exports = function of() {
	var len = arguments.length;
	var items = arguments;
	var C = this;
	var A = IsConstructor(C)
		? new C(len) // Construct(C, [len])
		: ArrayCreate(len);

	var k = 0;
	while (k < len) {
		var kValue = items[k];
		var Pk = ToString(k);
		CreateDataPropertyOrThrow(A, Pk, kValue);
		k = k + 1;
	}
	Set(A, 'length', len, true);
	return A;
};
