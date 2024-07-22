/*
Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}

PROBLEM
  write a function that takes an array of objects representing groceries and returns the total price of all groceries

INPUT
  -array
    -contains objects
    -each obj has strings and numbers as property vals

OUTPUT
  -number
    -can be a float

DATA STRUCTURES
  -arrays
  -objects
  -numbers

RULES
  -will receive exactly 1 arg
  -the arg always be an array
  -if array is empty, return 0
  -array will not be sparse
  -arr will only contain 'grocery' objects
  -objects will never be empty
  -all objects have the same properties
  -price values will never be negative
  -price values will always be valid (a number)


STEPS
  extract price of each grocery item
  return sum of prices

AGLO
  map over groceries array
    transform each element into its price value

  reduce mapped array
    sum each element and return

*/
function getTotalPrice(groceries) {
  let total = groceries.map(grocery => grocery.price * grocery.quantity)
                  .reduce((accum, currentPrice) => accum += currentPrice);

  return Number(total.toFixed(1));
}


// 1 bottle of milk:
console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
])) // 1.5

// 1 bottle of milk & 1 box of cereals:
console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
])) // 4

// 3 bottles of milk:
console.log(getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
])) // 4.5

// Several groceries:
console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
])) // 10.4

// Some cheap candy:
console.log(getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
])) // 0.3