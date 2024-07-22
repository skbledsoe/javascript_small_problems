/*
Create a function which converts an ordered number array into a array of ranges (represented as strings). Note how some arrays have some numbers missing.

If there are no numbers consecutive to a number in the array, represent it as only the string version of that number (see example #4).
Return an empty array if the given array is empty.

PROBLEM
  write a function that takes an array of ordered numbers and returns an array of strings representing the range of consecutive numbers

INPUT
  -array
    -Numbers
    -ascending order

OUTPUT
  -array
    -Strings with numbers in them

DATA STRUCTURES
  -Numebers
  -Strings
  -Arrays


RULES
  x-will always receive arr arg
  x-array can be empty
    => return []
  x-array will not be sparse
  x-digits will always be in ascending order
  x-numbers can be 0
  x-will not be NaN or Infinity
  x-array will only contain Number types
  x-return new array
  x-numbers will be whole


STEPS
  iterate over arg array, placing consecutive numbers in a container and pushing into some outer container (nested arr)
  transform nested arr elements to first element - last element in string form
  return array of strings representing ranges

[3, 4, 5, 10, 11, 12]
ALGO
  create output arr, ranges set to []

  iterate over numbersArr
    create temp arr
    push number into temp arr
    if the next element is not equal to current element + 1
      push temp into ranges, reset temp to []
["3-5", "10-12"]
  map over ranges
    if element length is 1,
      return "element"
    otherwise
      return "element[0]-element[element.length-1]"
  return mapped array

*/
function numbersToRanges(numbers) {
  let ranges = [];
  let range = [];

  for (let idx = 0; idx < numbers.length; idx++) {
    range.push(numbers[idx]);
    if (numbers[idx + 1] !== numbers[idx] + 1) {
      ranges.push(range);
      range = [];
    }
  }
  

  return ranges.map(range => {
    if (range.length === 1) {
      return `${range[0]}`;
    } else {
      return `${range[0]}-${range[range.length - 1]}`;
    }
  });
}



console.log(numbersToRanges([1, 2, 3, 4, 5])) // ["1-5"]
console.log(numbersToRanges([3, 4, 5, 10, 11, 12])) // ["3-5", "10-12"]
console.log(numbersToRanges([0, 1, 2, 4, 6, 7, 9])) // ["0-2", "4", "6-7", "9"]
console.log(numbersToRanges([])) // []

const arr = [0, 1, 2, 4, 6, 7, 9];
numbersToRanges(arr);
console.log(arr);

numbersToRanges([1, 2, 3, 4, 99, 100]) //➞ ["1-4", "99-100"]

numbersToRanges([1, 3, 4, 5, 6, 7, 8]) // ➞ ["1", "3-8"]

