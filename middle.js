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

module.exports = middle;