/*
Create an ordered 2D array (matrix). A matrix is ordered if its (0, 0) element is 1, its (0, 1) element is 2, and so on. Your function needs to create an a × b matrix. a is the first argument and b is the second.

PROBLEM
  write a functin that takes two numbers, rows and cols, and returns an ordered matrix of rows and cols.

INPUT
  -Numbers

OUTPUT
  -array
    -contains specified rows, with each row containing specified col

DATA STRUCTURES
  -numbers
  -arrays

RULES
  -will i always receive exactly two args
  -will the args always be positive


STEPS

  loop rows times to add rows to matrix
    loop cols times to add elements to row
  return matrix

ALGO
  given rows and cols arguments
    create a variable for the first element, named elem, set to 1
  create a matrix variable, set to []
  create a row variable

  loop until matrix length is equal to rows
    assign row to [];
      loop until row length is equal to cols
        push elem into row
        increment elem by 1
      push row into matrix
    
  return matrix
*/

function orderedMatrix(rows, cols) {
  const matrix = [];
  let element = 1;
  let row;

  while (matrix.length < rows) {
    row = [];
    while (row.length < cols) {
      row.push(element);
      element += 1;
    }
    matrix.push(row);
  }

  return matrix;
}


console.log(orderedMatrix(5, 5));
// [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25]
// ]

console.log(orderedMatrix(1, 1)) // [[1]]

console.log(orderedMatrix(1, 5)) //➞ [[1, 2, 3, 4, 5]]

console.log(orderedMatrix(1, 2))
console.log(orderedMatrix(3, 3))
console.log(orderedMatrix(3, 4))

