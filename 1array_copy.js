//what do the `console.log(myOtherArray)` lines log to the console?

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);
//[1, 2, 3] because both variables point to the same array

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);
//[1, 2, 3] because myArray was reassigned, but myOtherArray still points to the original array.

