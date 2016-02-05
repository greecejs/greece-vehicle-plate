'use strict';

var chai = require('chai');

var plate = require('../index');

var expect = chai.expect;

describe('Those plate numbers', function() {
  it('should be valid', function() {
    expect(plate.validate('ΑΒΕ-1234')).to.be.true;
    expect(plate.validate('ΚΚ-5555')).to.be.true;
    expect(plate.validate('ΖΖΖ-999')).to.be.true;
  });
});

describe('Those plate numbers', function() {
  it('should be invalid', function() {
    expect(plate.validate('Α-1234')).to.be.false;
    expect(plate.validate('ΑΒΕ-12')).to.be.false;
    expect(plate.validate('ΑΒΕ -1234')).to.be.false;
    expect(plate.validate('ΑΒΕ1234')).to.be.false;
    expect(plate.validate('ΧΑΒΕ-12345')).to.be.false;
    // Latin chars
    expect(plate.validate('ABE-1234')).to.be.false;
  });
});

describe('Those dirty plate numbers', function() {
  it('should be cleaned', function() {
    expect(plate.clean(' ΑΒΕ - 12 34 ')).to.equal('ΑΒΕ-1234');
  });
});
