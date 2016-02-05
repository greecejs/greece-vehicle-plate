'use strict';

var test = require('tape');

var plate = require('./index');

test('Those plate numbers must be valid', function (t) {
  t.plan(3)
  t.equal(plate.validate('ΑΒΕ-1234'), true);
  t.equal(plate.validate('ΚΚ-5555'), true);
  t.equal(plate.validate('ΖΖΖ-999'), true);
});

test('Those plate numbers must be invalid', function (t) {
  t.plan(6)
  t.equal(plate.validate('Α-1234'), false);
  t.equal(plate.validate('ΑΒΕ-12'), false);
  t.equal(plate.validate('ΑΒΕ -1234'), false);
  t.equal(plate.validate('ΑΒΕ1234'), false);
  t.equal(plate.validate('ΧΑΒΕ-12345'), false);
  // Latin chars
  t.equal(plate.validate('ABE-1234'), false);
});

test('Those dirty plate numbers must be cleaned', function (t) {
  t.plan(1)
  t.equal(plate.clean(' ΑΒΕ - 12 34 '), 'ΑΒΕ-1234');
});
