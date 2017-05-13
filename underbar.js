// Returns the given value. Seems pointless perhaps but see its use below for providing a default, no-op callback.
const identity = function(val) {
  return val;  
};

// Returns the first n elements of the given array.
const first = function(array, n = 1) {
  return array.slice(0, n);
};

// Returns the last n elements of the given array.
const last = function(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(array.length - n);
};

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function(array, target, fromIndex=0) {
  return array.slice(fromIndex)
              .indexOf(target) + fromIndex;
};

const isArrayLike = function(obj) {
  if (Number.isInteger(obj.length)) {
    return true;
  } else {
    return false;
  }
};

// The cornerstone of a functional library -- iterate all elements, pass each to a callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function(obj, callback=identity) {
  for (var key in obj) {
    callback(obj[key], key, obj);
  }
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function(obj, callback=identity) {
  let resultArr = [];
  each(obj, function(value, key, object) {
    resultArr.push(callback(value, key, object));
  });
  return resultArr;
};

// Return an array of the values o a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function(obj, key) {
  let resultArr = [];
  each(obj, function(element) {
    resultArr.push(element[key]);
    console.log(element, key);
  });
  return resultArr;
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).
const reduce = function(obj, callback=identity, initialValue) {
  let accumulator = initialValue;
  each(obj, (currentValue, indexOrKey, object) => {
    if(accumulator === undefined) {
      accumulator = currentValue;
    } else {
      accumulator = callback(accumulator, currentValue, indexOrKey, object);
    }
  });
  return accumulator;
};

// Return true if the object contains the target.
const contains = function(obj, target) {
  if (Array.isArray(obj)) {
    if (obj.indexOf(target) === -1) {
      return false;
    } else {
      return true;
    }
  } else {
    if (!obj[target]) {
      return false;
    } else {
      return true;
    }
  }
};

// Return true if all the elements / object values are accepted by the callback.
const every = function(obj, callback=identity) {
  let flag = true;
  each(obj, function(value) {
    flag = callback(value) && flag;
  });
  return flag;
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function(obj, callback=identity) {
  let flag = false;
  each(obj, function(value) {
    flag = callback(value) || flag;
  });
  return flag;
};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function(obj, callback=identity) {
  let resultArr = [];
  each(obj, function (val) {
    if(callback(val) === true) {
      resultArr.push(val);
    }
  });
  return resultArr;
};

// Return object without the elements / object valuesthat were rejected by the callback.
const reject = function(arr, callback=identity) {
  if(Array.isArray(arr)) {
    let result = [];
    each(arr, function (val) {
      if(callback(val) === false) {
        result.push(val);
      }
    });
    return result;
  } else {
    let result = {};
    each(arr, function (val, key) {
      if(callback(val) === false) {
        result[key] = val;
      }
    });
    return result;  
  }
};

// De-duplicates (de-dups) the elements / object values.
const uniq = function(obj) {
  if(Array.isArray(obj)) {
    result = [];
    each(obj, function(val, index) {
      if (result.indexOf(val) === -1) {
        result.push(val);
      };
    });
    return result;
  } else {
    result = {};
    each(obj, function(val, key) {
      if (!result[key]) {
        result[key] = val;
      };
    });
    return result;
  }
};


module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq
};
