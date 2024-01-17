/*
  Write a function that returns a string converted to lowercase.

  To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the ASCII table, add 32 to that number, then convert the number back to a character using the same ASCII table. You can use the String.fromCharCode and the String.charCodeAt methods for these operations. For example:

  let string = 'A';
  let asciiNumeric = string.charCodeAt(0);         // 65
  asciiNumeric += 32;
  string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase


  notes:
    you can use the [] and length property
    you can use charCodeAt and fromCharCode
    do not use other built in String methods or properties


  algo:
    given a string
      create output string

      iterate through string
        if character is a number, 
          concat character to output string
        otherwise, 
          save the character's ascii code to a variable, 
          add 32,
          save the new character from the updated ascii number to a variable
          concat variable with output string
          
      return output string
*/

//my solution:
function toLowerCase(string) {
  let lowercaseString = ''
  let firstLowerCaseAscii = 'a'.charCodeAt(0);

  for (let idx = 0; idx < string.length; idx++) {
    let isNumber = Number(string[idx]);
    let currentAscii = string[idx].charCodeAt(0);

    if (isNumber || currentAscii >= firstLowerCaseAscii) {
      lowercaseString += string[idx];
    } else {
      let asciiNumeric = string[idx].charCodeAt(0);
      asciiNumeric += 32;
      let lowercaseLetter = String.fromCharCode(asciiNumeric);
      lowercaseString += lowercaseLetter;
    } 
  }

  return lowercaseString;
}


//LS solution:
function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    let charCode = string.charCodeAt(index);

    if (string[index] >= 'A' && string[index] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"


/*
  -Launch School's solution sets the conversion to a constant, which makes sense because that number will never change. It also makes the meaning of the number more explicit. I opted to perform an operation with the number in a branch of my `if` statement, which looks messy.

  -To account for numbers and letters that are already lowercase, I created a variable that returns a truthy value if the character is a number, and another variable that contains the ascii code for the lowercase letter 'a'. I used both of those variables in the conditional of the first `if` branch to concatenate the character with the new string without performing any operations.
  
  -Launch School opted to create a variable that holds the ascii code of the current character. they then checked if the character was between 'A' and 'Z', which will perform an operation if the letter is uppercase. at the end of the loop, they convert the variable holding the ascii code into a character and concatenate it with the new string. This is a much cleaner and more concise approach, and I think the code looks more explicit.
*/