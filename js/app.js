'use strict';

alert('Hello, user. My name is Diego Ramos, and this is my Program. If you want, you can answer these yes/no questions about me.');
alert('remember, yes/no or y/n works all the same.');
var wrong = 'Wrong!';
var right = 'Right!';
var badInput = 'not correct input!';
var score = 0;

console.log('score at start of game should be 0.', score);
var answerOne = prompt('Do I wear glasses?').toUpperCase();
if (answerOne === 'Y' || answerOne === 'YES' ) {
  alert(right);
  score++;
} else if (answerOne === 'N' || answerOne === 'NO') {
  alert(wrong);
} else {
  alert(badInput);
}
console.log('q1 about glasses, correct answer is yes.', answerOne);
console.log('current score: possible points at this stage is 1.', score);

var answerTwo = prompt('Is my nickname Peter?').toUpperCase();
if (answerTwo === 'Y' || answerTwo === 'YES') {
  alert(wrong);
} else if (answerTwo === 'N' || answerTwo === 'NO') {
  alert(right);
  score++;
} else {
  alert(badInput);
}
console.log('q2 about nickname, correct answer is no.', answerTwo);
console.log('current score: possible points at this stage is 2.', score);

var answerThree = prompt('Do I go to the Seattle Campus for CodeFellows?').toUpperCase();
if (answerThree === 'Y' || answerThree === 'YES') {
  alert(right);
  score++;
} else if (answerThree === 'N' || answerThree === 'NO') {
  alert(wrong);
} else {
  alert(badInput);
}
console.log('q3 about school, correct answer is yes.', answerThree);
console.log('current score: possible points at this stage is 3.', score);


var answerFour = prompt('Do I like sweets/candy?').toUpperCase();
if (answerFour === 'Y' || answerFour === 'YES') {
  alert(wrong);
} else if (answerFour === 'N' || answerFour === 'NO') {
  alert(right);
  score++;
} else {
  alert(badInput);
}
console.log('q4 about food, correct answer is no.', answerFour);
console.log('current score: possible points at this stage is 4.', score);


var answerFive = prompt('Is Street Fighter 5 My favorite game?').toUpperCase();
if (answerFive === 'Y' || answerFive === 'YES') {
  alert(wrong);
} else if (answerFive === 'N' || answerFive === 'NO') {
  alert(right);
  score++;
} else {
  alert(badInput);
}
console.log('q5 about games, correct answer is no.', answerFive);
console.log('current score: possible points at this stage is 5.', score);

let guesses = 0; 
var answerSix = prompt('What is my favorite number? (from 1 to 20)');
while (answerSix !== 7 || guesses !== 4) {
  if (answerSix > 7) {
    alert('too high!');
  }
  else {
    alert('too low!');
  }
  guesses++;
}
if (guesses === 4) {
  alert(wrong);

}


alert('your score was ' + score + ' out of 5.');

