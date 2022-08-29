const assertEqual = require('./assertEqual');

// CHALLENGE BELOW

const tail = function(anyArray) {
  if (anyArray.length === 0 || anyArray.length === 1) {
    let emptyArray = [];
    return emptyArray;
  }
  return anyArray.slice(1, anyArray.length);
};

module.exports = tail;