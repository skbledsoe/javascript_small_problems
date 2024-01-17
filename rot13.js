/*
  Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

  For each character in the original String:

  If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. Thus, a becomes n. If you reach the end of the alphabet, return to the beginning. Thus, o becomes b.
  Letter transformations preserve case. A becomes N while a becomes n.
  Don't modify characters that are not letters.
  Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.

  notes:
    if a character is not a letter, don't modify it
    maintain case
    if you reach the end of the alphabet, loop back to the beginning
    could use ascii codes or store the alphabets in an object
      'A' = 65
      'Z' = 90
      'a' = 97
      'z' = 122

  algo:
    create four constants:
      upperA, upperZ, lowerA, lowerZ
    create new output string, set to empty string

    iterate through string argument
      if character is not between 'A' and 'Z' or 'a' and 'z', concat with output string


      get ascii number for current letter
      if letter is greater than upperZ - 13 and less than upperZ 
        subtract ascii from upperZ, set to temp variable
        update ascii to upperA + (13 - temp)
        concat output string with letter at new ascii number

      if letter is less than upperZ
        add 13 to ascii
        concat output string with letter at new ascii number

      if letter is greater than lowerZ - 13 and less than lowerZ
        subtract ascii from lowerZ, set to temp variable
        update ascii to lowerA + (13 - temp)
        concat output string with letter at new ascii number

      if letter is less than lowerZ
        add 13 to ascii
        concat output string with letter at new ascii number

*/

function rot13(string) {
  const upperA = 'A'.charCodeAt(0);
  const upperZ = 'Z'.charCodeAt(0);
  const lowerA = 'a'.charCodeAt(0);
  const lowerZ = 'z'.charCodeAt(0);

  let rotString = '';

  for (let idx = 0; idx < string.length; idx++) {
    let ascii = string[idx].charCodeAt(0);

    if (ascii >= upperA && ascii <= upperZ) {
      ascii += 13;

      if (ascii > upperZ) {
        ascii -= upperZ + 1;
        ascii += upperA;
      }
   
      rotString += String.fromCharCode(ascii);
    } else if (ascii >= lowerA && ascii <= lowerZ) {
      ascii += 13

      if (ascii > lowerZ) {
        ascii -= lowerZ + 1;
        ascii += lowerA;
      }

      rotString += String.fromCharCode(ascii);
    } else {
      rotString += string[idx];
    }
  }

  return rotString;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.


console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.