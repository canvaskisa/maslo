'use strict';

var __keys = Object.keys;
var __floor = Math.floor;
var __random = Math.random;
var __range = function (length) {
	return Array.apply(null, Array(length));
};

function shape(o) {
	var result = {};

	__keys(o).forEach(function (k) {
		if (typeof o[k] === 'function') {
			result[k] = o[k]();
		} else {
			result[k] = o[k];
		}
	});

	return result;
}

function oneOf(arr) {
	return arr[__floor(__random() * arr.length)];
}

function bool() {
	return oneOf([true, false]);
}

function arrayOf(type, length) {
	return __range(length).map(type);
}

module.exports = {
	shape: shape,
	arrayOf: arrayOf,
	bool: bool,
	oneOf: oneOf
};
