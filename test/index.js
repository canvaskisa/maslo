import test from 'ava';
import {
	shape,
	oneOf,
	bool,
	arrayOf
} from '../index.js';

test('shape must return an object', t => {

	const expected = {
		id: '0',
		name: 'Mr. Johnson'
	};

	const actual = shape({
		id: '0',
		name: () => 'Mr. Johnson'
	});

	t.same(expected, actual);
});

test('oneOf must return on of provided arguments', t => {

	const optional = ['Test', 'Test2', 'Test3'];
	const actual = oneOf(optional);

	t.ok(optional.indexOf(actual) !== -1);
});

test('bool must return ture or false', t => {

	const optional = [true, false];

	t.ok(optional.indexOf(bool()) !== -1);

});

test('arrayOf must return array of provided type', t => {

	const actual = arrayOf(shape.bind(null, {
		id: () => 0,
		value: () => 100
	}), 2);

	t.same([{
		id: 0,
		value: 100
	}, {
		id: 0,
		value: 100
	}], actual);

});
