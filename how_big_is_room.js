/*
  Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

  Note: 1 square meter == 10.7639 square feet

  Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

  Example:

  Enter the length of the room in meters:
  10
  Enter the width of the room in meters:
  7
  The area of the room is 70.00 square meters (753.47 square feet).

  algo:
    create a constant for readline sync
    create a constant for square feet, set to 10.7639

    log a message asking the user for the length and then the width of the room
    save each input to a length and width variable, respectively
    create a meters variable and set it to length x width
    create a feet variable and set it to meters * square feet constant
    log a message with the results

*/


//my solution
const rlSync = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

console.log('Enter the length of the room in meters:');
let length = Number(rlSync.prompt());
console.log('Enter the width of the room in meters:');
let width = Number(rlSync.prompt());

let squareMeters = (length * width).toFixed(2);
let squareFeet = (squareMeters * SQMETERS_TO_SQFEET).toFixed(2);

console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} square feet).`);


//LS solution:
let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);


/*
  I chose to save rlsync as a constant as opposed to a variable like LS did. I also transformed the length and width inputs to numbers upon input, where LS got the input and then used `parseInt` to transform them.
  Since we're not validating input, I think `parseInt` is the better way to go. If `Number()` encounters a non-numeric character, it will return NaN. If `parseInt` encounters a non-numeric character, it ignores the rest of the string and returns the numbers it encountered at the beginning of the string.

  Another difference is where the two final variables are formatted. I chose to format them at the point of initialization, and LS chose to format them in the output logged to the console. The latter is the better option, I think, because `toFixed()` returns a string. If I wanted to perform other operations on those variables, I couldn't do it without transforming them back to numbers.
*/
