/*
  Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

  EXAMPLE:
  Please enter an integer greater than 0: 5
  Enter "s" to compute the sum, or "p" to compute the product. s
  The sum of the integers between 1 and 5 is 15.

  Please enter an integer greater than 0: 6
  Enter "s" to compute the sum, or "p" to compute the product. p
  The product of the integers between 1 and 6 is 720.

  algo:
    prompt the user for an integer greater than 0. convert input to integer
    prompt the user for sum or product

    
    if they want the sum,
    create an output variable, set to 0
      loop from 1 to integer, inclusive
        add current number to output variable

    if they want the product
      create an output variable, set to 1
      loop from 1 to integer, inclusive
        multiply output with current number

    log message that displays the output variable
*/

let rlSync = require('readline-sync');

let number = rlSync.question('Please enter an integer greater than 0: ');
number = parseInt(number, 10);
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

if (operation === 's') {
  let sum = 0;

  for (let current = 1; current <= number; current++) {
    sum += current;
  }

  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} 

if (operation === "p") {
  let product = 1;

  for (let current = 1; current <= number; current++) {
    product *= current;
  }

  console.log(`The product of the integers between 1 and ${number} is ${product}.`);
}
