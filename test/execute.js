/*!
 * test/execute.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'sinon',
  'execute'
], function (assert, sinon, execute) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('execute.js', function () {

  beforeEach(function () {
    this.obj = { method: sinon.stub() };
  });

  it('Should continue if obj does not exist.', function () {
    execute(this.fake, 'noexistent');
  });

  it('Should continue if method does not exist.', function () {
    execute(this.obj, 'noexistent');
  });

  it('Should call with passed arguments if method exists.', function () {
    execute(this.obj, 'method', 'test', 'val');
    
    var args = this.obj.method.args[0];
    assert.equal(args[0], 'test');
    assert.equal(args[1], 'val');
  });
  
});


});