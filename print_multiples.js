/*
  Write a function logMultiples that takes one argument number. It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.

  You may assume that number is an integer between 0 and 100.

  algo:
    given a number
      loop from 1 to number 
        create multiple variable, assign to current number * number
          if current number is odd AND multiple is less than 100
            log multiple to the console

*/

// performs an operation to find the multiple and then evaluates it
function logMultiples(number) {
  for (let currentNumber = number; currentNumber >= 1; currentNumber--) {
    let multiple = currentNumber * number
    if ((currentNumber % 2 === 1) && (multiple < 100)) {
      console.log(multiple);
    }
  }
}


// evaluates each number between number and 100 and prints it if it satisfies conditions
function logMultiples(number) {
  for (let currentNumber = 100; currentNumber >= number; currentNumber--) {
    if (currentNumber % 2 === 1 && currentNumber % number === 0) {
      console.log(currentNumber);
    }
  }
}

// further exploration: starting with the argument's largest multiple, output if its odd, decrement by argument, break if multiple is negative
function logMultiples(number) {
  let multiple = Math.floor(100 / number) * number
  for (; multiple > 0; multiple -= number) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }
  }
}



logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// output (3x and 1x)
// 63
// 21