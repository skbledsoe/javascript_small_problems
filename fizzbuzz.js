/*
  Write a function that iterates over the integers from 1 to 100, inclusive. For multiples of three, log "Fizz" to the console. For multiples of five, log "Buzz". For numbers which are multiples of both three and five, log "FizzBuzz". For all other numbers, log the number.

  algo:
    loop from 1 to 100, inclusive
      if current number is a multiple of 3 AND 5,
        log 'FizzBuzz'
      if current number is a multiple of 3,
        log 'Fizz'
      if current number is a multiple of 5,
        log 'Buzz'
      otherwise,
        log current number
*/


// my solution, includes a log statement in every branch
const fizzbuzz = () => {
  for (let currentNum = 1; currentNum <= 100; currentNum++) {
    if (currentNum % 3 === 0 && currentNum % 5 === 0) {
      console.log('FizzBuzz');
    } else if (currentNum % 3 === 0) {
      console.log('Fizz');
    } else if (currentNum % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(currentNum);
    }
  }
}

// LS solution, saves message and logs it to the console after the if statement
const fizzbuzz = () => {
  for (let currentNum = 1; currentNum <= 100; currentNum++) {
    let message = currentNum;

    if (currentNum % 3 === 0 && currentNum % 5 === 0) {
      message = 'FizzBuzz';
    } else if (currentNum % 3 === 0) {
      message = 'Fizz';
    } else if (currentNum % 5 === 0) {
      message = 'Buzz';
    }

    console.log(message);
  }
}

fizzbuzz();

/* console output
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
… rest of output omitted for brevity
*/