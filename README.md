# Maslo
[![NPM version](http://img.shields.io/npm/v/maslo.svg)](https://www.npmjs.org/package/maslo)
[![Travis Build Status](https://travis-ci.org/canvaskisa/maslo.svg)](https://travis-ci.org/canvaskisa/maslo)
[![Coveralls Coverage Status](https://coveralls.io/repos/github/canvaskisa/maslo/badge.svg?branch=master)](https://coveralls.io/github/canvaskisa/maslo)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Simple JSON fake data creation.

## Installation
```console
$ npm install maslo --save-dev
```

Probably you will want to use [faker.js](https://github.com/marak/Faker.js/).
```console
$ npm install faker --save-dev
```

or [chancejs](http://chancejs.com/).
```console
$ npm install chance --save-dev
```

## Usage
*All examples uses `faker.js`*.

### ES6
```js
import faker from 'faker';
import {
	shape,
	bool,
	oneOf,
	arrayOf,
	optional
} from 'maslo';

const fakeUserSchema = shape({
	id: faker.random.uuid,
	name: faker.name.findName,
	description: optional(() => 'description'),
	isAdmin: bool(),
	status: oneOf(['slave', 'master']),
	posts: arrayOf(shape({
		id: faker.random.uuid,
		title: faker.name.findName
	}), 1, 5)
});

const fakeUserJSON = fakeUserSchema();

```

## Api
### shape(Object)
Returns a function, which iterates on a provided object's keys and calls them (in case of the key is a `function`) or just returns it's value.

### bool()
Returns a `function`, which returns `true` or `false`.

### arrayOf(Array, [min, max])
Returns a function, which iterates on a provided array's values and calls them (in case of the value is a `function`) or just returns it's value.

**min** Type: `Number`

Min length of generated array. Default: `5`;

**max** Type: `Number`

Max length of generated array.

### oneOf(Array)
Returns a function, which returns one of provided array value.

### optional(Function)
Returns a function, which returns function's result or special `@@OPTIONAL` value. `Shape` will remove all `@@OPTIONAL` values from himself.

## License
MIT © [Aleksandr Yakunichev](https://github.com/canvaskisa)
