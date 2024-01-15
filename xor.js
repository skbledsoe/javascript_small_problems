/*
  For boolean values, the || operator returns true if either or both of its operands are true, false if both operands are false. The && operator, on the other hand, returns true if both of its operands are true, and false if either operand is false. This works great until you need only one of two conditions to be true, the so-called "exclusive or", or XOR.

  Write a function named console.log(isXor that takes two arguments, and returns true if exactly one argument is truthy, false otherwise. Your function should work with the boolean values of true and false, but also any JavaScript values based on their "truthiness".

  input: any data structure
  output: boolean


  algo
    given two arguments
      convert each argument to its boolean equivalent (!!arg)
      if both are false OR both are true,
        return false
      otherwise return true
*/

// mine: conditional checks for conditions that should return false. otherwise, returns true.
function isXor(arg1, arg2) {
  if ((arg1 && arg2) || (!arg1 && !arg2)) {
    return false;
  }

  return true;
}

// more concise version: the first && statement checks if arg1 is true and arg2 is false. If that's correct, the conditional would essentially be (true && true), and the next would be (false && false). We then check if one or the other value is true with the || (true || false) and then explicitly coerce the return value into a boolean by preceeding that conditional with !!. Without doing that, if the values are not booleans, the || operator returns the first value if it's truthy or the second value if the first is falsy.
// 
function isXor(arg1, arg2) {
  return !!((arg1 && !arg2) || (!arg1 && arg2))
}


// LS: conditionals check for conditions that should return true. otherwise returns false.
function isXor(arg1, arg2) {
  if (arg1 && !arg2) {
    return true;
  }

  if (!arg1 && arg2) {
    return true;
  }

  return false;
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false