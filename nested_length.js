/*
The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

  [1, [2, 3]]
  // 2 elements, number 1 and array [2, 3]

Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

Write a function that returns the total number of non-nested items in a nested array.

PROBLEM
  write a function that takes a nested array and returns the number of elements that are not nested.

INPUT
  -array
    -nested 
    -can be multi-dimensional


OUTPUT
  -number

DATA STRUCTURES
  -numbers
  -arrays

RULES
  -will i always receive exactly 1 arg
  -will the arg always be an array
  -will the array ever be empty
  -will it ever be sparse
  -will the array ever contain nested simple objects - are they treated the same as nested arrays
  -can the nested arrays be empty or sparse


STEPS
  flatten nested array to Infinity level
  return length of flat array

ALGO
  given a multi-dimensional array
    fully flatten the array
    return the length

*/

function getLength(arrays) {
  return arrays.flat(Infinity).length
}

console.log(getLength([])) // 0
console.log(getLength([1, [2, 3]])) // 3
console.log(getLength([1, [2, [3, 4]]])) // 4
console.log(getLength([1, [2, [3, [4, [5, 6]]]]])) // 6
console.log(getLength([1, [2], 1, [2], 1])) // 5

console.log(getLength([1, [2,3]]) === 3)
console.log(getLength([1, [2, [3, 4]]]) === 4)
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]) === 6)
console.log(getLength([1, 7, 8]) === 3)
console.log(getLength([2]) === 1)
console.log(getLength([2, [3], 4, [7]]) === 4)
console.log(getLength([2, [3, [5, 7]], 4, [7]]) === 6)
console.log(getLength([2, [3, [4, [5]]], [9]]) === 5)
console.log(getLength([]) === 0)