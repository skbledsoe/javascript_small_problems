/*
  Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.

  data structures: number strings

  algo:
    loop from 1 to 100 inclusive
      if a number is divisible by 3 AND 5, log the number appended with an !
      if a number is divisible by 3 OR 5, log the number

*/

// function declaration

// function multiplesOfThreeAndFive() {
//   for (let number = 1; number <= 100; number++) {
//     if (number % 3 === 0 && number % 5 === 0) {
//       console.log(String(number) + '!');
//     } else if (number % 3 === 0 || number % 5 === 0) {
//       console.log(String(number));
//     }
//   }
// }


// function expression

// const multiplesOfThreeAndFive = function() {
//   for (let number = 1; number <= 100; number++) {
//     if (number % 3 === 0 && number % 5 === 0) {
//       console.log(String(number) + '!');
//     } else if (number % 3 === 0 || number % 5 === 0) {
//       console.log(String(number));
//     }
//   }
// }


// arrow function

// const multiplesOfThreeAndFive = () => {
//   for (let number = 1; number <= 100; number++) {
//     if (number % 3 === 0 && number % 5 === 0) {
//       console.log(String(number) + '!');
//     } else if (number % 3 === 0 || number % 5 === 0) {
//       console.log(String(number));
//     }
//   }
// }

// further exploration: function takes arguments for a range of numbers
function multiplesOfThreeAndFive(start, end) {
  for (let number = start; number <= end; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(String(number) + '!');
    } else if (number % 3 === 0 || number % 5 === 0) {
      console.log(String(number));
    }
  }
}

multiplesOfThreeAndFive(2, 103);

// output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// … remainder of output omitted for brevity
