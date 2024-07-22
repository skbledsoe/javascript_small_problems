/*
Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

PROBLEM
  write a function that takes an object of chapters/pages as well as a pageNumber and returns the name of the chapter whose page is closest to the pageNumber. If two chapter pages are equidistant, return the chapter with the higher page.

INPUT
  -object
  -number

OUTPUT
  -string

DATA STRUCTURES
  -object
    -strings
    -numbers
  -numbers
  -strings
  -array
    -iterate through object chapters


RULES
  1. if pageNumber is not provided, treat it as 0
  2. first argument will always be provided and will always be an obj
  3. object will never be empty
  4. object property values will always be positive integers
  5. argument object should not be modified
  6. objects will never be 2-dimensional
  7. chapter values will always be in ascending order


STEPS
  iterate through book keys
  find the chapter with the smallest difference between the pageNumber and chapter value
  return the name of the chapter


ALGO
  given a book object and pageNumber
    if pageNumber is undefined, assign to 0

    map over the book keys, chapter as variable
      return absolute val of pageNumber - chapter value
        book[chapter] => value
          [5, 5, 27]

    find the minimum val of mapped array
      could do this using math.min, passing in all the elements
    use the min value to find the last index of the value in the mapped arr

    use that index to return the name of the chapter using book keys

*/
function nearestChapter(book, pageNumber) {
  if (!pageNumber) pageNumber = 0;
  const chapters = Object.keys(book);
  const differences = chapters.map(chapter => Math.abs(pageNumber - book[chapter]));
  const idx = differences.lastIndexOf(Math.min(...differences))  ;

  return chapters[idx];  
}


nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) //=== "Chapter 2"

nearestChapter({
  "Chapter 1" : 5,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) //=== "Chapter 2"

nearestChapter({
  "Chapter 1" : 5,
  "Chapter 2" : 15,
  "Chapter 3" : 25
}, 20) //=== "Chapter 3"

nearestChapter({
  "Chapter 1" : 5,
  "Chapter 2" : 15,
  "Chapter 3" : 25
}) //=== "Chapter 1"

const book = {
  "Chapter 1" : 5,
  "Chapter 2" : 15,
  "Chapter 3" : 25
};

nearestChapter(book, 3) //=== "Chapter 1"
console.log(book);