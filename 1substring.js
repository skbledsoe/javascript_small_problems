/*
  Write a function that returns a substring of a string based on a starting index and length.

  notes:
    -if start is a negative number, treat it as string.length - start
    -length is the maximum length of substring. if it exceeds the number of available characters, just use the available characters.
    -you can use [] and the length property


  algo:
    given a string, start, and length
      if start is negative, add it to string.length (this will subtract it)
      create substring variable, set to empty string

      iterate through string, starting at start variable, ending when substring length matches length variable
        if start is equal to string length, break
        concatenate current letter with substring variable

      return substring 
*/


function substr(string, start, length) {
  if (start < 0) {
    start += string.length;
  }

  let substring = '';

  for (let idx = start; substring.length < length; idx++) {
    if (idx === string.length) {
      break;
    }
    
    substring += string[idx];
  }

  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""