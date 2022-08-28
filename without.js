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

// without function

//go through each element in source array
//then compare each source element to itemsToRemove array
//if any ===, then remove from array = newarray

const without = function(source, itemsToRemove) {
  let newArray = source;
  for (let item of itemsToRemove) {
    let removeSourceIndex = source.indexOf(item);
    if (removeSourceIndex !== -1) {
      newArray.splice(removeSourceIndex, 1);
    }
  }
  console.log(newArray);
  return newArray;
};

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
