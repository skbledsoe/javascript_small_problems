/*
Write a function that takes in a string and for each character, returns the distance to the nearest vowel in the string. If the character is a vowel itself, return 0.


map over array of chars
pass each char, idx, and arr to helper function


helper => return number
  if letter is vowel, return 0
  create distance arr, []
  iterate over arr
    if current el is vowel, subtract charIdx from currentIdx, add to distance arr (absolute value)
  return smallest number from arr


*/
function determineDistance(char, charIdx, arr) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  if (VOWELS.includes(char)) {return 0}
  let distances = [];

  arr.forEach((ltr, idx) => {
    if (VOWELS.includes(ltr)) {
      distances.push(Math.abs(charIdx - idx));
    }
  });

  return Math.min(...distances);
}

function distanceToNearestVowel(str) {
  return str.toLowerCase().split('').map((char, idx, arr) => determineDistance(char, idx, arr));
}


console.log(distanceToNearestVowel("")) // []
console.log(distanceToNearestVowel("aaaaa")) // [0, 0, 0, 0, 0]
console.log(distanceToNearestVowel("bAbbb")) // [1, 0, 1, 2, 3]
console.log(distanceToNearestVowel("aaaaa")) // [0, 0, 0, 0, 0])
console.log(distanceToNearestVowel("")) // [])
console.log(distanceToNearestVowel("bba")) // [2, 1, 0])
console.log(distanceToNearestVowel("abbb")) // [0, 1, 2, 3])
console.log(distanceToNearestVowel("abab")) // [0, 1, 0, 1])
console.log(distanceToNearestVowel("babbb")) // [1, 0, 1, 2, 3])
console.log(distanceToNearestVowel("baaab")) // [1, 0, 0, 0, 1])
console.log(distanceToNearestVowel("abcdabcd")) // [0, 1, 2, 1, 0, 1, 2, 3])
console.log(distanceToNearestVowel("abbaaaaba")) // [0, 1, 1, 0, 0, 0, 0, 1, 0])
console.log(distanceToNearestVowel("treesandflowers")) // [2, 1, 0, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0, 1, 2])
console.log(distanceToNearestVowel("pokerface")) // [1, 0, 1, 0, 1, 1, 0, 1, 0])
console.log(distanceToNearestVowel("beautiful")) // [1, 0, 0, 0, 1, 0, 1, 0, 1])
console.log(distanceToNearestVowel("rythmandblues")) // [5, 4, 3, 2, 1, 0, 1, 2, 2, 1, 0, 0, 1])
console.log(distanceToNearestVowel("shopper")) // [2, 1, 0, 1, 1, 0, 1])
console.log(distanceToNearestVowel("singingintherain")) // [1, 0, 1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 0, 0, 1])
console.log(distanceToNearestVowel("sugarandspice")) // [1, 0, 1, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0])
console.log(distanceToNearestVowel("totally")) // [1, 0, 1, 0, 1, 2, 3])

// All input strings will contain at least one vowel.
// Strings will be lowercased.
// Vowels are: a, e, i, o, u.

// NOTES
// before starting with pedac, you should describe the problem in your own words
  // use the provided cases to confirm understanding ahead of time
// ask about case
// confirm what is considered a vowel
// test output as you go
