/*
  Implement a function that determines whether a string begins with another string. If it does, the function should return true, or false otherwise.

  notes:
    you can use the [] and length property
    do not use other built in String methods or properties
    if the searchString is an empty string, return true

  algo:
    given a string and a searchString
    return true if searchString is empty
      iterate through searchString
        if current char of searchString does not equal current char of string
          return false
        
  
*/


function startsWith(string, searchString) {
  for (let idx = 0; idx < searchString.length; idx++) {
    if (searchString[idx] !== string[idx]) {
      return false;
    }
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false


/*
  Originally, I began the function with an `if` statement that returns true if the searchString was an empty string. However, leaving that out returns true anyway, because the loop is never run for that example, so only the final return statement executes. The loop is not run because the conditional does not evaluate as true. the string length of that example is 0, and 0 is not less than 0.
*/