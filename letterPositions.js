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

//letterPositions function

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] === ' '){
      i++;
    } 

    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }

  }
  console.log(results);
  return results;
};


// test codes

// letterPositions('what is up');
// letterPositions('lighthouse in the house');
// letterPositions('hello');

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("hello").o, [4]);
