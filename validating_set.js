/*

In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. 

All three cards must:
  Have the same color or different colors.
  Have the same number or different numbers.
  Have the same shades or different shades.
  Have the same shape or different shapes.

The four properties are:
  Colors: red, purple, green
  Numbers: 1, 2, 3
  Shades: empty, lined, full
  Shapes: squiggle, oval, diamond

Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.


PROBLEM
  write a function that takes an array containing 3 objects, each representing a 'card', and returns a boolean based on whether or not the set of cards meets some criteria

INPUT
  -array
    -contains objects
      -contain strings and numbers for property values

OUTPUT
  -boolean

DATA STRUCTURES
  -array
  -object
  -primitives (strings, numbers, booleans)


RULES
  x1. argument will always be an array of objects and will always be present
  x2. array can be empty
    -return false
  x3. array can contain more or less than 3 objects
    -return false if more or less than 3 are present
  x4. objects will always contain the specified key/value pairs
  x5. object properties will always be valid
    -numbers will always be positive
    -strings will always be lowercase
  x6. do not modify calling array


STEPS
  iterate through array elements
  push property into corresponding array if it's not already in array
  evaluate length of property arrays
  return a boolean

ALGO
  given an array of cardObj
    create property arrays for colors, numbers, shades, shapes, set to []

    iterate through arg array
      iterate through cardObj keys
      for each property, push value into corresponding array if it does not include the value


    pass property array lengths to helper function that returns boolean, return that value


    create array of property names
    iterate through property names array - reduce, [] as starting value
      for each property name, loop from 0 - 2



  helper function - evaluateCardProperties(...lengths)
    given an array of lengths
      if array includes 2, return false
      otherwise return true

*/
function evaluateCardProperties(...lengths) {
  if (lengths.includes(2)) return false;
  return true;
}

function isSet(cards) {
  if (cards.length !== 3) return false;

  let colors = [];
  let numbers = [];
  let shades = [];
  let shapes = [];

  cards.forEach(card => {
    if (!colors.includes(card.color)) {
      colors.push(card.color);
    }

    if (!numbers.includes(card.number)) {
      numbers.push(card.number);
    }

    if (!shades.includes(card.shade)) {
      shades.push(card.shade);
    }

    if (!shapes.includes(card.shape)) {
      shapes.push(card.shape);
    }
  });

return evaluateCardProperties(colors.length, numbers.length, shades.length, shapes.length);
}


console.log(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]) === true)

console.log(isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]) === true)

console.log(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) === false)

console.log(isSet([]) === false)

console.log(isSet([
  { color: "red", number: 3, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) === false)

console.log(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
]) === false)

let setArr = [{color: "red", number: 1, shade: "lined", shape: "squiggle"}, 
{color: "red", number: 1, shade: "lined", shape: "diamond"}, 
{color: "red", number: 1, shade: "lined", shape: "oval"}];

console.log(isSet(setArr) === true);
console.log(setArr) // unchanged