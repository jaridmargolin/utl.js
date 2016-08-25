/*!
 * isFunction.js
 * 
 * Copyright (c) 2014
 */

define(function () {


/* -----------------------------------------------------------------------------
 * isFunction
 * ---------------------------------------------------------------------------*/

/**
 * Determine if a given value is a Function.
 *
 * @example
 * var isFn = isFunction(fn);
 *
 * @public
 *
 * @param {*} value - Value to test.
 */
return function (value) {
  return Object.prototype.toString.call(value) === '[object Function]';
};


});