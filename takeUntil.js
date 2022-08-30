// compare array lengths

const compareArrayLengths = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return 'Both arrays have the same length!';
  }
  return false;
};

// go through each element in an array and compare them

const compareEachElement = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// eqArrays function

const eqArrays = function(arr1, arr2) {
  if (!compareArrayLengths(arr1, arr2)) {
    return false;
  }
  if (!compareEachElement(arr1, arr2)) {
    return false;
  }
  return true;
};

// assertArraysEqual function

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// takeUntil function

const takeUntil = function(array, callback) {
  let outputArray = [];

  for (let i = 0; i <= array.length; i++){
    if (!callback(array[i])) {
      outputArray.push(array[i]);
    } else {
      return outputArray;
    }
  }

  return outputArray;
};

// expected input and output below

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
// [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]

//test codes below

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;