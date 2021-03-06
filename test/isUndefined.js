/*!
 * test/isUndefined.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'isUndefined'
], function (assert, isUndefined) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('isUndefined.js', function () {

  before(function () {
    this.obj = { 'pass': false };
  });

  it('Should return true if value is undefined.', function () {
    assert.isTrue(isUndefined(this.obj.fail));
  });

  it('Should return false if value is not undefined.', function () {
    assert.isFalse(isUndefined(this.obj.pass));
  });

});


});