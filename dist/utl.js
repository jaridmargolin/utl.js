(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['utl'] = factory();
  }
}(this, function () {

/*!
 * capitalize.js
 * 
 * Copyright (c) 2014
 */
var capitalize, clip, toArray, delayApply, delayCall, execute, isArray, isEmpty, isFunction, isNull, isObject, isUndefined, jsonClone, mapValues, parametize, returns, snip, tmpl, uncapitalize, utl;
capitalize = function (str) {
  return str[0].toUpperCase() + str.slice(1);
};
/*!
 * clip.js
 * 
 * Copyright (c) 2014
 */
clip = function (list, values) {
  var listLength = list.length;
  var valuesLength = values.length;
  // Loop backwards so that when we remove a value
  // from the array we don't have to adjust our
  // incrementer.
  while (listLength--) {
    for (var i = 0; i < valuesLength; i++) {
      if (values[i] === list[listLength]) {
        list.splice(listLength, 1);
      }
    }
  }
  return list;
};
/*!
 * toArray.js
 * 
 * Copyright (c) 2014
 */
toArray = function (args, start, end) {
  start = start || 0;
  end = end || args.length;
  return Array.prototype.slice.call(args, start, end);
};
/*!
 * delayCall.js
 * 
 * Copyright (c) 2014
 */
delayApply = function (milliseconds, fn, context, args) {
  args = toArray(args || []);
  setTimeout(function () {
    fn.apply(context, args);
  }, milliseconds);
};
/*!
 * delayCall.js
 * 
 * Copyright (c) 2014
 */
delayCall = function (milliseconds, fn, context) {
  var args = toArray(arguments, 3);
  setTimeout(function () {
    fn.apply(context, args);
  }, milliseconds);
};
/*!
 * execute.js
 * 
 * Copyright (c) 2014
 */
execute = function (obj, name) {
  if (obj && obj[name]) {
    obj[name].apply(obj, Array.prototype.slice.call(arguments, 2));
  }
};
/*!
 * isArray.js
 * 
 * Copyright (c) 2014
 */
isArray = function (value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};
/*!
 * isEmpty.js
 * 
 * Copyright (c) 2014
 */
isEmpty = function (obj) {
  // Array
  if (isArray(obj)) {
    return obj.length === 0;
  }
  // Object
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};
/*!
 * isFunction.js
 * 
 * Copyright (c) 2014
 */
isFunction = function (value) {
  return Object.prototype.toString.call(value) === '[object Function]';
};
/*!
 * isNull.js
 * 
 * Copyright (c) 2014
 */
isNull = function (variable) {
  return variable === null;
};
/*!
 * isObject.js
 * 
 * Copyright (c) 2014
 */
isObject = function (value) {
  return value === Object(value);
};
/*!
 * isUndefined.js
 * 
 * Copyright (c) 2014
 */
isUndefined = function (variable) {
  return typeof variable === 'undefined';
};
/*!
 * jsonClone.js
 * 
 * Copyright (c) 2014
 */
jsonClone = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};
/*!
 * mapValues.js
 * 
 * Copyright (c) 2014
 */
mapValues = function (object, iterator) {
  var result = {};
  for (var k in object) {
    result[k] = iterator(object[k], k, object);
  }
  return result;
};
/*!
 * parametize.js
 * 
 * Copyright (c) 2014
 */
parametize = function (url, obj) {
  var hasUrl = arguments.length > 1;
  // Normalize args
  obj = hasUrl ? obj : url;
  // Create param string
  var str = '';
  for (var key in obj) {
    if (str !== '') {
      str += '&';
    }
    str += key + '=' + obj[key];
  }
  return hasUrl ? url + '?' + str : str;
};
/*!
 * returns.js
 * 
 * Copyright (c) 2014
 */
returns = function (value) {
  return function () {
    return value;
  };
};
/*!
 * snip.js
 * 
 * Copyright (c) 2014
 */
snip = function (obj, prop) {
  var val = obj[prop];
  delete obj[prop];
  return val;
};
/*!
 * tmpl.js
 * 
 * Copyright (c) 2014
 */
tmpl = function (str, data) {
  return str.replace(/{([^{}]*)}/g, function (a, b) {
    return typeof data[b] === 'string' ? data[b] : a;
  });
};
/*!
 * uncapitalize.js
 * 
 * Copyright (c) 2014
 */
uncapitalize = function (str) {
  return str[0].toLowerCase() + str.slice(1);
};
/*!
 * utl.js
 * 
 * Copyright (c) 2014
 */
utl = {
  capitalize: capitalize,
  clip: clip,
  delayApply: delayApply,
  delayCall: delayCall,
  execute: execute,
  isArray: isArray,
  isEmpty: isEmpty,
  isFunction: isFunction,
  isNull: isNull,
  isObject: isObject,
  isUndefined: isUndefined,
  jsonClone: jsonClone,
  mapValues: mapValues,
  parametize: parametize,
  returns: returns,
  snip: snip,
  tmpl: tmpl,
  toArray: toArray,
  uncapitalize: uncapitalize
};

return utl;


}));