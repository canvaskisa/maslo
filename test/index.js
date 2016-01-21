import test from 'ava';
import {
	shape,
	oneOf,
	bool,
	arrayOf,
	optional,
	__OPTIONAL__
} from '../index.js';

test('shape must return an object', t => {
	const expected = {
		id: '0',
		name: 'Mr. Johnson'
	};

	const actual = shape({
		id: '0',
		name: () => 'Mr. Johnson'
	})();

	t.same(expected, actual);
});

test('oneOf must return one of provided arguments', t => {
	const optional = ['Test', 'Test2', 'Test3'];
	const actual = oneOf(optional)();

	t.ok(optional.indexOf(actual) !== -1);
});

test('bool must return ture or false', t => {
	const optional = [true, false];

	t.ok(optional.indexOf(bool()()) !== -1);
});

test('arrayOf must return array of provided type', t => {
	const actual = arrayOf(shape({
		id: () => 0,
		value: () => 100
	}), 1);

	t.same([{
		id: 0,
		value: 100
	}], actual());
});

test('arrayOf must return an array with 5 length, when `min` argument is missing', t => {
	t.is(arrayOf(() => 'test')().length, 5);
});

test('arrayOf must return an array with `min` length', t => {
	t.is(arrayOf(() => 'test', 10)().length, 10);
});

test('arrayOf must return an array with length between `min` and `max`', t => {
	const len = arrayOf(() => 'test', 10, 50)().length;
	t.ok(len >= 10 && len <= 50);
});

test('optional must return initial function or `__OPTIONAL__` value', t => {
	const value = 'optional';
	const actual = optional(() => value)();

	t.ok(actual === value || actual === __OPTIONAL__);
});
