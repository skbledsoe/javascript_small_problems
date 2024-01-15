/*
  Write a password guessing program that tracks how many times the user enters the wrong password. If the user enters the password wrong three times, log 'You have been denied access.' and terminate the program. If the password is correct, log 'You have successfully logged in.' and end the program.

  EXAMPLE:
  password = 'password'
  
  The program displays a dialog that asks the user to enter a password.
  If the user enters the wrong password, keep asking up to three times. After three failures, log the access denied.

  => What is the password: 123
  => What is the password: opensesame
  => What is the password: letmein
  
  // message on the console
  => You have been denied access.
  
  // If the user enters the right password, report login success.
  => What is the password: password
  
  // message on the console
  => You have successfully logged in.


  notes:
    use readline-sync to get user input


  algo:
    passwordCheck function
      create local variable for password
      create local variable for loggedIn, set to false

      loop while loggedIn is false or counter is <= 3
        get user input, set it to local variable
        if password and input match, set loggedIn to true
          *this will break the loop 

      return message(loggedIn)

    message function
      given a boolean
      if true, return 'You have successfully logged in.'
      if false, return 'You have been denied access.'
*/


// mine: i wrote two functions, one that gets user input and compares it to the password, and one that outputs a message based on the outcome of the password.
function message(status) {
  if (status) {
    return 'You have successfully logged in.'
  } else {
    return 'You have been denied access.'
  }
}

function logIn() {
  const rlSync = require('readline-sync');
  let password = 'password';
  let loggedIn = false;
 
  for (let counter = 1; counter <= 3; counter++) {
    let userPassword = rlSync.question('What is the password:');

    if (password === userPassword) {
      loggedIn = true;
      break;
    }
  }

  console.log(message(loggedIn));
}


// logIn();


// LS: they set a constant for the password and a local variable for tracking purposes. then they used a `while` loop to loop while true. within the loop, they assigned the guess to the user's input. if the guess and the password match, they log a message to the console and then break. if not, they add one to the counter variable. they then compare the counter to 3, and if they match, they log a message to the console and break. (they also used prompt instead of readline-sync to get user input in the browser rather than the terminal)
const PASSWORD = 'password';
const rlSync = require('readline-sync');
let failedAttempts = 0;


while (true) {
  let guess = rlSync.question('What is the password: ')

  if (PASSWORD === guess) {
    console.log('You have successfully signed in.');
    break;
  }

  failedAttempts += 1;

  if (failedAttempts === 3) {
    console.log('You have been denied access.');
    break;
  }
}