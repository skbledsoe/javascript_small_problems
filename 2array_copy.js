/*
  In the previous exercise, the value of the reference gets copied. For this exercise, only the values of the array should be copied, but not the reference. Implement two alternative ways of doing this.
*/

//using a built-in method
// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray.slice();

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);


//using a loop
let myArray = [1, 2, 3, 4];
const myOtherArray = [];

for (let idx = 0; idx < myArray.length; idx++) {
  myOtherArray.push(myArray[idx]);
}

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);