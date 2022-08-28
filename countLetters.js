// assertEqual function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//

const countLetters = function(stringInput) {
  let tallyLetter = {};
  for (let letter of stringInput) {
    if (tallyLetter[letter]) {
      tallyLetter[letter] += 1;
    } else {
      tallyLetter[letter] = 1;
    }
  }
  console.log(tallyLetter);
  return tallyLetter;
};

countLetters('iiiiIIIILOVESUSHIiiiii');
