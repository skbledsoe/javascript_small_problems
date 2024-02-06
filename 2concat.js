/*
  The concat function from the previous exercise could only concatenate a maximum of two arrays. For this exercise, you are going to extend that functionality. Refactor the concat function to allow for the concatenation of two or more arrays or values.


  algo:
    given an indefinite number of arguments using the rest (...) parameter, iterate through the argument array

    if element is an array,
      iterate through and push each element
    otherwise,
      push element


*/


function concat(...arguments) {
  let concatArr = [];

  for (let outerIdx = 0; outerIdx < arguments.length; outerIdx++) {
    let element = arguments[outerIdx];
    if (Array.isArray(element)) {
      for (let innerIdx = 0; innerIdx < element.length; innerIdx++) {
        concatArr.push(element[innerIdx]);
      }
    } else {
      concatArr.push(element);
    }
  }

  return concatArr;
}



console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]