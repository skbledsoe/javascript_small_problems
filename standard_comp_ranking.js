/*


helper function
extract array of name and score (from entries? entries?), sort by second element(score)
access runningScore (math max for object values?)

iterate over nested array, count and rank both equal 1, increment count
  currentScore assign to second value in array
  if first element, 
    push rank into element
    continue
  
  if currentScore === runningScore
    push rank into element
    continue
  else
    assign rank to count
    push rank into element
    continue

  return array




given an object and a name
  assign ranking to helper function array
  filter array by name
  return last element in returned array



*/

function assignRankings(object) {
  let runningScore = Math.max(...Object.values(object));
  let rankings = Object.entries(object).sort((a, b) => b[1] - a[1]);
  
  for (let count = 1, rank = 1; count < rankings.length + 1; count++) {
    let element = rankings[count - 1];
    let currentScore = element[1];
    
    if (count === 1) {
      element.push(rank)
    } else if (currentScore === runningScore) {
      element.push(rank)
    } else {
      runningScore = currentScore;
      rank = count;
      element.push(rank)
    }
  }
  return rankings;
}



function competition_rank(object, name) {
  let rankings = assignRankings(object);
  return rankings.filter(person => person[0] === name)[0][2];
};



//Examples
console.log(competition_rank({
  George: 96, 
  Emily: 95, 
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane")); // 4

console.log(competition_rank({
  Kate: 92, // 1
  Carol: 92, // 1
  Jess: 87, // 3
  Bruce: 87, // 3
  Scott: 84 // 5
  }, "Bruce")); // 3

console.log(competition_rank({
  George: 96, // 1
  Emily: 96,  // 1
  Susan: 93,  // 3
  Jane: 89,   // 4
  Brett: 82   // 5
  }, "Jane")); // 4

console.log(competition_rank({
  George: 96, // 1
  Emily: 96,  // 1
  Susan: 96,  // 1
  Jane: 89,   // 4
  Brett: 82   // 5
  }, "Jane")); // 4

console.log(competition_rank({
  George: 96, // 1
  Emily: 96,  // 1
  Susan: 95,  // 3
  Jane: 95,   // 3
  Brett: 82   // 5
  }, "Brett")); // 5