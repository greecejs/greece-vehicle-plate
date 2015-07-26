'use strict';

exports.validate = function(number) {
  const NUMBER_REGEX = /^[ΑΒΕΖΗΙΚΜΝΟΡΤΥΧ]{2,3}-[0-9]{3,4}$/;
  return NUMBER_REGEX.test(number);
};

exports.clean = function(number) {
  return number.replace(/\s+/g, '');
};
