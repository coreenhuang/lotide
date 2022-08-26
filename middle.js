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

// middle function BELOW

// array with one or two elements will return empty array

const checkForSufficientElements = function(anyArray) {
  if (anyArray.length === 1 || anyArray.length === 2) {
    return false;
  }
  return true;
};

//console.log(checkForSufficientElements([1, 2]));

// see if array length is even or odd and check for index

const checkEvenOrOdd = function(anyArray) {
  let index = [];
  if (anyArray.length % 2 === 0) {
    index.push((anyArray.length / 2) - 1);
    index.push(anyArray.length / 2);
  } else {
    index.push(Math.floor(anyArray.length / 2));
  }
  return index;
};

// push into outputArray

const makeOutputArray = function(anyArray) {
  let outputArray = [];
  for (let i of checkEvenOrOdd(anyArray)) {
    outputArray.push(anyArray[i]);
  }
  return outputArray;
};

// middle function

const middle = function(anyArray) {
  if (!checkForSufficientElements(anyArray)) {
    return [];
  }
  return makeOutputArray(anyArray);
};

