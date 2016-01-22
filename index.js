'use strict';

var __OPTIONAL__ = '@@OPTIONAL';
var __keys = Object.keys;
var __floor = Math.floor;
var __random = Math.random;
var __range = function (length) {
	return Array.apply(null, Array(length)).map(function (v, i) {
		return i;
	});
};

var shape = function (o) {
	return function () {
		var result = {};

		__keys(o).forEach(function (k) {
			var v = typeof o[k] === 'function' ? o[k]() : o[k];

			if (v !== __OPTIONAL__) {
				result[k] = v;
			}
		});

		return result;
	};
};

var oneOf = function (arr) {
	return function () {
		return arr[__floor(__random() * arr.length)];
	};
};

var bool = function () {
	return oneOf([true, false]);
};

var arrayOf = function (type, min, max) {
	min = min || 5;

	return function () {
		if (max) {
			var randomMax = oneOf(__range(max + 1))();
			return __range(randomMax < min ? min : randomMax).map(type);
		}

		return __range(min).map(type);
	};
};

var optional = function (fn) {
	return function () {
		return bool()() ? fn() : __OPTIONAL__;
	};
};

module.exports = {
	shape: shape,
	oneOf: oneOf,
	bool: bool,
	arrayOf: arrayOf,
	optional: optional,
	__OPTIONAL__: __OPTIONAL__
};
