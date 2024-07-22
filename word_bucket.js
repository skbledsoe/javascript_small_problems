/*
Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. Only include full words inside each bucket.

PROBLEM
  write a function that takes a string and an integer and returns an array of substrings that are no more than integer characters long

INPUT
  -string
  -number

OUTPUT
  -array
    -contains substrings

DATA STRUCTURES
  -strings
  -numbers
  -arrays


RULES
  x-will i always receive exactly two args
  x  -what do i do if too few or too many
  x    -too few => []
  x    -too many => undefined
  x  -what do i do if no args
  x    => undefined
  x-the second arg always be a positive number
  x-first arg always be a string
  x-string can be empty
  x  => []
  x-if only some substrings in the string are the correct size or smaller
  x  => return empty array
  x-if no substrings are the correct size or smaller
  x  => return empty array
  x-string will only contain alphabetic characters delimited by strings
  x-there will never be consecutive spaces
  x-the string will never start or end with a space

STEPS
  split string at spaces
  push substrings into container if they are <= bucket size
  return array of substrings

ALGO
  edge cases:
    if arguments object length is 0 or more than 2, return undefined
    if bucketSize is undefined, return []
      could also reassign bucketSize to itself or 0 if not a truthy val, then continue with logic


  ['she', 'sells', 'sea', 'shells'], 10
  ["the" "mouse" "jumped" "over" "the" "cheese"], 7
  [ 'she' 'sells' 'sea' 'shells'], 3

  given a phrase and bucketSize
    split string at spaces, save as substrings
    create a copy of substrings
    create a buckets container, save to []
    create a temp substring, save to ''

    loop through substrings arr
    if current element length is <= bucket size:
      concat current element with substring
      if next element is undefined,
        push substring into buckets
      else if length of current elemnet + ' ' + next element is less than bucketSize,
        concat a space with substring
        next iteration
      else 
        push substring into buckets
        reset substring to '';
      outside of if statement, shift substrCopy array to remove current element
    
    if substrCopy arr has any length, return an empty array
    otherwise, return buckets

*/
// function validBuckets(buckets, substrings) {
//   if (substrings.length > 0) return [];
//   return buckets;
// }

// function bucketize(phrase, bucketSize) {
//   if (arguments.length === 0 || arguments.length > 2) return undefined;

//   bucketSize = bucketSize || 0;
//   let substrings = phrase.split(' ');
//   let substrCopy = [...substrings];
//   let buckets = [];
//   let substr = '';

//   substrings.forEach((str, idx) => {
//     if (str.length <= bucketSize && str.length > 0) {
//       substr += str;

//       if (substrings[idx + 1] === undefined) {
//         buckets.push(substr);
//       } else if (substr.length + substrings[idx + 1].length < bucketSize) {
//         substr += ' ';
//       } else {
//         buckets.push(substr);
//         substr = '';
//       }

//       substrCopy.shift();
//     }
//   });

//   return validBuckets(buckets, substrCopy);
// }



function bucketize(string, bucketSize) {
  let resultArr = [];
  let wordArr = string.split(' ');
  let buildString = '';

  while (wordArr.length) {
    let tempStr = (buildString + ' ' + wordArr[0]).trim();
    if (tempStr.length <= bucketSize) {
      wordArr.shift();
      buildString = tempStr;
    } else {
    resultArr.push(buildString);
    buildString = '';
    }
  }

  if (buildString.length) resultArr.push(buildString);

  return resultArr;
}

console.log(bucketize("she sells sea shells by the sea", 10))
// ["she sells", "sea shells", "by the sea"]

console.log(bucketize("the mouse jumped over the cheese", 7))
// // ["the", "mouse", "jumped", "over", "the", "cheese"]

console.log(bucketize("fairy dust coated the air", 20))
// // ["fairy dust coated", "the air"]

console.log(bucketize("a b c d e", 2))
// // ["a", "b", "c", "d", "e"]

console.log(bucketize("she sells sea shells by the sea", 10))
//➞ ["she sells", "sea shells", "by the sea"]

console.log(bucketize("the mouse jumped over the cheese", 7))
// //➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

// console.log(bucketize('not enough arguments')); // []
// console.log(bucketize('this one has too many', 4, 8)); // undefined
// console.log(bucketize()); // undefined
// console.log(bucketize('', 4)); // []

console.log(bucketize('she sells sea shells', 3)); // []
console.log(bucketize('hello there world', 4)); // []