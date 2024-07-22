/*
Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.

PROBLEM
  write a function that takes two arrays - one nested and one flat - and returns true if the nested arrays of the first array can be concatenated to form the second array

INPUT
  -arrays
    -one is two-dimensional
    -contains numbers

OUTPUT
  -boolean

DATA STRUCTURES
  -booleans
  -numbers
  -arrays

RULES
  x-will i always receive exactly 2 args
    -yes
  x-will the args always be arrays
    -yes
  x-will the arrays ever be empty or sparse
    x-if one of the arrays is empty, return false
    x-if both arrays are empty, return true
    x-arrays will never be sparse
  x-will the first array always contain nested arrays
  x  -yes
  x-will the nested arrays ever be sparse
    x-nested arrays can be empty
    x-will not be sparse
  x-will the arrays contain any data type other than numbers
    x-yes, can contain any primitive
  x-will the numbers be ordered
    x-no
  -am i allowed to sort the arrays
    -no


STEPS
  iterate through arrays, removing elements who occur equal times in each
    return false if occurrences are not the same
  return boolean

ALGO
  given a subArrs and targetArr
    flatten subArrs

    if length of subArrs and targetArr are not the same, return false

    loop through subArrs, idx as var
      filter both arrays to find current element, get lengths for each arr
      if lengths are not equal, return false
    
    outside of loop, return true
*/
function canConcatenate(subArrs, targetArr) {
  subArrs = subArrs.flat(Infinity);

  if (subArrs.length !== targetArr.length) return false;

  for (let idx = 0; idx < subArrs.length; idx++) {
    let curEl = subArrs[idx];
    let length1 = subArrs.filter(el => el === curEl).length;
    let length2 = targetArr.filter(el => el === curEl).length;

    if (length1 !== length2) return false;
  }

  return true;
}


canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) // true

canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) // true
console.log(canConcatenate([], [1, 2, 3, 4]) === false)
console.log(canConcatenate([1, 2, 3, 4], []) === false)
console.log(canConcatenate([], []) === true)
console.log(canConcatenate([[], [1, 2, 3, 4], [5], [6, 7]], [1, 2, 3, 4, 5, 6, 7]) === true)
console.log(canConcatenate([['hello', 'world'], ['there']], ['hello', 'there', 'world']) === true)
console.log(canConcatenate([[3, 1, 2], [4, 6], [7, 5]], [1, 2, 3, 4, 5, 6, 7]) === true)
console.log(canConcatenate([[3, 1, 2], [4, 4], [7, 5]], [2, 6, 5, 3, 4, 1, 7]) === false)
console.log(canConcatenate([[3, 2], [4, 6], [7, 5]], [1, 6, 5, 4, 3, 2, 7]) === false)


// ??????
console.log(canConcatenate([[true, false, undefined], [1], [null]], [null, false, true, undefined, 1]) === true)


console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) === false)
// Duplicate 7s not found in target array.

console.log(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) === false)
// Missing 6 from target array.


console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) === true)
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [1, 2, 3, 4, 5, 6, 7]) === true)
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) === true)
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) === false)
console.log(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) === false)
console.log(canConcatenate([[1, 4], [3]], [1, 3, 4]) === true)
console.log(canConcatenate([[1, 4], [3]], [1, 2, 3, 4]) === false)
console.log(canConcatenate([[1, 4], [3]], [4, 3, 1]) === true)
console.log(canConcatenate([[1, 4], [2, 3]], [4, 3, 1, 2]) === true)
console.log(canConcatenate([[1], [2], [3, 4]], [4, 3, 1, 2]) === true)
console.log(canConcatenate([[1], [2], [3], [4]], [4, 3, 1, 2]) === true)