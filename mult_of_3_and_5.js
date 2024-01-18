/*
  Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

  You may assume that the number passed in is an integer greater than 1.

  algo:
    given a number
      create sum variable

      loop from 1 to number, inclusive
        if current number is multiple of 3 or 5,
          add to sum

      return sum
*/

function multisum(number) {
  let sum = 0;

  for (let current = 1; current <= number; current++) {
    if (current % 3 === 0 || current % 5 === 0) {
      sum += current;
    }
  }

  return sum;
}


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168