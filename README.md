# greece-vehicle-plate [![Build Status](https://travis-ci.org/greecejs/greece-vehicle-plate.svg?branch=master)](https://travis-ci.org/greecejs/greece-vehicle-plate) [![Coverage Status](https://coveralls.io/repos/github/greecejs/greece-vehicle-plate/badge.svg?branch=master)](https://coveralls.io/github/greecejs/greece-vehicle-plate?branch=master) [![npm](https://img.shields.io/npm/v/greece-vehicle-plate.svg)](https://www.npmjs.com/package/greece-vehicle-plate)

> Check that a vehicle registration plate number used in Greece is valid.

## Installation

```sh
$ npm install greece-vehicle-plate
```

## Usage

To validate a plate number:

```js
const plate = require('greece-vehicle-plate');

plate.validate('ΚΥΒ-1050'); // true
plate.validate('ΑΑΑ-1'); // false
```

Please note that the validation is strict, for example it will not allow spaces. Use `clean()` to remove any whitespace from a number before validating it:

```js
plate.validate('ΑΒΕ -1234 '); // false
const cleaned = plate.clean('ΑΒΕ -1234 '); // 'ΑΒΕ-1234'
plate.validate(cleaned); // true
```

## License

[MIT](http://opensource.org/licenses/mit-license.php)
