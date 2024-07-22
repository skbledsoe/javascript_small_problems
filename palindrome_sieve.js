/*
Write a function that takes in an array of integers and returns the integers that are either palindromes or almost-palindromes. An almost-palindrome is any integer that can be rearranged to form a palindrome.

For example, the numbers 677 and 338 are both almost-palindromes, since they can be rearranged to form 767 and 383, respectively.


PROBLEM
  write a function that takes an array of numbers and returns an array of the numbers that are or are almost palindromes

INPUT
  -array
    -contains integers

OUTPUT
  -array
    -contains certain elements from input array

DATA STRUCTURES
  -array

RULES
  -single numbers are palindromes


STEPS

  filter through array, select elements for with some palindrome function is true
    if removing duplicate elements results in an integer that is more than 1 digit long, it's not a palindrome
  return elements from the array that are palindromes (or almost)

ALGO
  given an array of integers
  filter through array
    select elements for which canBePalindrome returns true
  return filtered array

['4', '3', '2', '1']
['4', '4', '3', '2', '2']
  canBePalindrome
    given an integer
    turn into a string and split => array of string digits
    
    filter through digits,
      select elements whose first index is equal to the last index

    return true if length of filtered arr is less than or equal to 1

*/
function canBePalindrome(number) {
  let digits = String(number).split('');
  let unique = digits.filter(el => digits.indexOf(el) === digits.lastIndexOf(el));
  return unique.length <= 1;
}

function palindromeSieve(numbers) {
  return numbers.filter(canBePalindrome);
}


console.log(palindromeSieve([443, 12, 639, 121, 3232]))// ➞ [443, 121, 3232]
// Since 443 => 434; 121 is a palindrome; 3232 => 2332 or 3223

console.log(palindromeSieve([5, 55, 6655, 8787]))// ➞ [5, 55, 6655, 8787]
// Single-digit numbers are automatically palindromes.

console.log(palindromeSieve([897, 89, 23, 54, 6197, 53342]))// ➞ []

console.log(palindromeSieve([443, 12, 639, 121, 3232]))// [443, 121, 3232])
console.log(palindromeSieve([5, 55, 6655, 8787]))// [5, 55, 6655, 8787])
console.log(palindromeSieve([897, 89, 23, 54, 6197, 53342]))// [])
console.log(palindromeSieve([112, 334, 555, 656, 665, 444, 443, 7]))// [112, 334, 555, 656, 665, 444, 443, 7])
console.log(palindromeSieve([1, 2, 123]))// [1, 2])
console.log(palindromeSieve([1, 2, 3]))// [1, 2, 3])
console.log(palindromeSieve([555, 687868877]))// [555, 687868877]) 768878867
console.log(palindromeSieve([555, 68786887]))// [555, 68786887])
console.log(palindromeSieve([]))// [])


// function getDuplicates(arr) {
//   let uniques = Array.from(new Set(arr));

//   return uniques.map(el => {
//     return arr.filter(el1 => el === el1);
//   });
// }


// console.log(getDuplicates([1, 1, 2, 3, 3]))
// console.log(getDuplicates([1, 1, 2, '1', '1', 3, '3']))
// console.log(getDuplicates([true, false, true, 'true', 3]))
