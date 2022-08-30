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

// assertEqual function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqObjects function below

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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

// test codes

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); 
// => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); 
// => false

// object examples below taken from MDN to test out

const ex1 = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};

const ex2 = {
  make: 'Ford',
  model: 'Mustang',
  year: 19690
};

assertEqual(eqObjects(ex1, ex2), false); 

// test codes with arrays below

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;