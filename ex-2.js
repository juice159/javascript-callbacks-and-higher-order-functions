//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  let newArray = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      newArray++;
    }
    if (newArray >= 5 ){
      return true;
    }
  }
  return false;
}
function isAbove70(score) {
  return score > 70;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, isAbove70)
let scoreRoom2Result = atLeastFive(studentScoresRoom2, isAbove70)
let scoreRoom3Result = atLeastFive(studentScoresRoom3, isAbove70)

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
