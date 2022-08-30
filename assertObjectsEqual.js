// eqObjects function

const eqObjects = function(object1, object2) {
  let putKeysIntoSortedArray1 = Object.keys(object1).sort();
  let putKeysIntoSortedArray2 = Object.keys(object2).sort();

  let putValuesIntoSortedArray1 = Object.values(object1).sort();
  let putValuesIntoSortedArray2 = Object.values(object2).sort();


  if (putKeysIntoSortedArray1.length !== putKeysIntoSortedArray2.length) {
    return false;
  }
  
  for (let i = 0; i < putKeysIntoSortedArray1.length; i++) {
    if (putKeysIntoSortedArray1[i] !== putKeysIntoSortedArray2[i]) {
      return false;
    }
  }

  for (let j = 0; j < putValuesIntoSortedArray1.length; j++) {
    if (Array.isArray(putValuesIntoSortedArray1[j]) && Array.isArray(putValuesIntoSortedArray2[j])) {
      if (!eqArrays(putValuesIntoSortedArray1[j], putValuesIntoSortedArray2[j])) {
        return false;
      } else {
        return true;
      }
    }
    
    if (putValuesIntoSortedArray1[j] !== putValuesIntoSortedArray2[j]) {
      return false;
    }
  }

  return true;
};

// FUNCTION IMPLEMENTATION - assertObjectsEqual function

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; 

  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

// test codes below

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba);

// test codes (object examples below taken from MDN to test out)

const ex1 = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};

const ex2 = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};

assertObjectsEqual(ex1, ex2); 
