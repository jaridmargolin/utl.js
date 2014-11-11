/*!
 * test/utl.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'utl'
], function (assert, _) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('utl.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.capitalize);
    assert.ok(_.clip);
    assert.ok(_.delayApply);
    assert.ok(_.delayCall);
    assert.ok(_.execute);
    assert.ok(_.isArray);
    assert.ok(_.isEmpty);
    assert.ok(_.isFunction);
    assert.ok(_.isNull);
    assert.ok(_.isObject);
    assert.ok(_.isUndefined);
    assert.ok(_.jsonClone);
    assert.ok(_.mapValues);
    assert.ok(_.parametize);
    assert.ok(_.returns);
    assert.ok(_.snip);
    assert.ok(_.tmpl);
    assert.ok(_.toArray);
    assert.ok(_.uncapitalize);
  });

});


});