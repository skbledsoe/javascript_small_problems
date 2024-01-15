/*
  Create a function that computes the Greatest Common Divisor of two positive integers.


  algo:
    given two numbers
      loop from smallest number down to 1
        if the remainder of EACH number % current number is 0,
          return current number
      
*/

// mine: i declared a variable called counter and assigned it to the smallest argument using a ternary operator. This will account for arguments that are not passed in numerical order. I then used a for loop to loop while counter is greater than 1, subtracting 1 from it each loop. in the body of the loop, I check if the remainder of each argument % counter is 0, and if it is, the value of counter is returned.
 function gcd(num1, num2) {
  let counter = num1 > num2 ? num2 : num1;
  for (; counter > 0; counter--) {
    if (num1 % counter === 0 && num2 % counter === 0) {
      return counter;
    }
  }
 }


 // LS: they declared a variable `temp` which starts out with a value of undeclared. Then they loop while the second number is not equal to 0. in the body of the loop, they assign `temp` to the value of the second number. Then they reassign the second number to the remainder of the first number divided by the second. Then they reassign the first number to the current value of `temp`. Once the second number equals 0, the loop breaks and the value of the first number is returned.
 function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
 }

console.log(gcd(12, gcd(4, 8)));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1

