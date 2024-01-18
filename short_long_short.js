/*
  Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

  algo:
    given two strings,
      if the first string is longer than the second string,
        switch their places

      return the first string + second string + first string
*/

function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    [str1, str2] = [str2, str1];
  }

  return str1 + str2 + str1;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"