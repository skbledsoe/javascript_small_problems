/*
  Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.

  You may assume that the input is always a non-negative integer.

  notes:
    a prime number is a whole number greater than 1 whose only factors are 1 and itself


  algo:
    given a number
      create counter variable. set to 0
      loop from 1 as currentNum to number
        if number % currentNum is 0, add 1 to counter

      return (counter === 2)

*/

// my solution: keep track of divisors using a counter variable, use that value to log true or false
function isPrime(number) {
  let counter = 0;

  for (currentNum = 1; currentNum <= number; currentNum++) {
    if (number % currentNum === 0) {
      counter += 1;
    }
  }

  console.log(counter === 2);
}


// LS solution: loop from 2 up to number, exclusive. if current number is a divisor, terminate and return false
function isPrime(number) {
  if (number <= 1) return false;

  for (let currentNum = 2; currentNum < number; currentNum++) {
    if (number % currentNum === 0) return false;
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false