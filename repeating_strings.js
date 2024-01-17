/*
  Implement a function that takes a string and a number times as arguments. The function should return the string repeated times number of times. If times is not a number, return undefined. If it is a negative number, return undefined also. If times is 0, return an empty string. You may ignore the possibility that times is a number that isn't an integer.

  notes:
    you can concatenate strings
    do not use other built in String methods or properties
    return empty string if times is 0
    return undefined if number is negative, or not a number


  algo:
    given an string and argument,
      return undefined if argument is less than 1 or not a number

      create output string variable
      loop from 0 to argument
        concatenate output string with argument string

      return output string
*/


//my solution: i put the logic that determines whether the argument is less than 0 or not a number inside the conditional of the `if` statement. I used the return value of the `Number.isInteger()` method on the argument and tested the boolean opposite of it - if the argument is not a number, its boolean opposite would be true, and then `undefined` would be returned.
function repeat(string, times) {
 if (times < 0 || !Number.isInteger(times)) {
    return undefined;
  }

  let outputString = '';
  for (let count = 0; count < times; count++) {
    outputString += string;
  }

  return outputString;
}


//LS solution: virtually similar, but they saved the logic to a constant and then used the constant in the `if` statement conditional, returning `undefined` if the boolean opposite is true.
const isCount = value => Number.isInteger(value) && value >= 0;

function repeat(string, times) {
  if (!isCount(times)) {
    return undefined;
  }

  let repeated = '';
  for (let counter = 0; counter < times; counter += 1) {
    repeated += string;
  }

  return repeated;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined