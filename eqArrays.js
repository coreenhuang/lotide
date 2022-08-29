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

module.exports = {compareArrayLengths, compareEachElement, eqArrays};