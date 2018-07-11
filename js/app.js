'use strict';

var user = prompt('What\'s your name?');
alert('Hello,' + user + 'My name is Diego Ramos, and this is my Program. If you want, you can answer these yes/no questions about me.');
alert('remember, yes/no or y/n works all the same.');
var wrong = 'Wrong!';
var right = 'Right!';
var badInput = 'not correct input!';
var correctAnswersSeven = ' The correct answers were 2, 3, and 4.';
var score = 0;
var scoreJudgement = [
  'You don\'t know me very well! Talk to me sometime.', //indice 0 score 0
  'You know me a little. At least you tried.', //indice 1 score 1
  'You know a few things about me. Pretty good!',
  'You know a fair bit about me. Thanks for paying attention!',
  'You\'re great at knowing other people.',
  'You know more about me than I am comfortable with.',
  'If you got this score, you\'re probably me.',
  'You know me better than I know me.'];

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

let guessesSix = 0;
var answerSix = 0;
while (answerSix !== 7 || guessesSix !== 4) {
  answerSix = prompt('What is my favorite number? (from 1 to 20)');
  if (answerSix > 7) {
    alert('too high!');
    guessesSix++;
  }
  else if (answerSix < 7){
    alert('too low!');
    guessesSix++;
  }
  else {
    alert(right);
    score++;
  }
}
if (guessesSix === 4) {
  alert(wrong);
}

var sfgames = [1, 2, 3, 4, 5];
var guessesSeven = 0;
var answerSeven = 0;
while (answerSeven !== sfgames[1] || answerSeven !== sfgames[2] || answerSeven !== sfgames[3] || guessesSeven !== 6) {
  answerSeven = prompt('Can you guess one of the actually good Street Fighter Games? (from 1 to 5)');
  if (answerSeven !== sfgames[1] || answerSeven !== sfgames[2] || answerSeven !== sfgames[3]){
    alert(wrong);
    guessesSeven++;
  } else if (answerSeven !==sfgames[0] || answerSeven !== sfgames[4]){
    alert(right + correctAnswersSeven);
    score++;
  }
}
if (guessesSeven === 6){
  alert(wrong + correctAnswersSeven);
}


alert(user + ' , ' + 'your score was ' + score + ' out of 7.');
switch(score) {
case 0:
  alert(scoreJudgement[score]);
  break;

case 1:
  alert(scoreJudgement[score]);
  break;

case 2:
  alert(scoreJudgement[score]);
  break;

case 3:
  alert(scoreJudgement[score]);
  break;

case 4:
  alert(scoreJudgement[score]);
  break;

case 5:
  alert(scoreJudgement[score]);
  break;

case 6:
  alert(scoreJudgement[score]);
  break;

case 7:
  alert(scoreJudgement[score]);
  break;


}

