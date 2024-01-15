/*
  Write a program to determine a student’s grade based on the average of three scores you get from the user. Use these rules to compute the grade:

  - If the average score is greater than or equal to 90 then the grade is 'A'
  - If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
  - If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
  - If the average score is less than 50 then the grade is 'F'

  You may assume that all input values are valid positive integers.


  EXAMPLE:
  // prompts to get the 3 scores
    => Enter score 1: 90
    => Enter score 2: 50
    => Enter score 3: 78

  // log to the console
    => Based on the average of your 3 scores your letter grade is "B".


  algo:
    assign score1, score2, and score3 to separate user input, explicitly coercing into a number

    add each of the three variables and divide by 3, save that value to a new variable called average

    declare local variable called letterGrade

    if average is >= 90,
      assign letterGrade to 'A'
    if  >= 70 and <90
      'B'
    if >= 50 and < 70
      'C'
    if <50
      'F'

  log message to console displaying letter grade

*/


// terminal

const rlsync = require('readline-sync');
let letterGrade;

let score1 = Number(rlsync.question('Enter score 1: '));
let score2 = Number(rlsync.question('Enter score 2: '));
let score3 = Number(rlsync.question('Enter score 3: '));

let average = (score1 + score2 + score3) / 3

if (average >= 90) {
    letterGrade = 'A';
} else if (average >= 70) {
  letterGrade = 'B';
} else if (average >= 50) {
  letterGrade = 'C';
} else {
  letterGrade = 'F';
}

console.log(`Based on the average of your 3 scores your letter grade is "${letterGrade}"`);



// browser
let letterGrade;

let score1 = Number(prompt('Enter score 1: '));
let score2 = Number(prompt('Enter score 2: '));
let score3 = Number(prompt('Enter score 3: '));

let average = (score1 + score2 + score3) / 3

if (average >= 90) {
    letterGrade = 'A';
} else if (average >= 70) {
  letterGrade = 'B';
} else if (average >= 50) {
  letterGrade = 'C';
} else {
  letterGrade = 'F';
}

console.log(`Based on the average of your 3 scores your letter grade is "${letterGrade}"`);
