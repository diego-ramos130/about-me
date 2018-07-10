'use strict';

alert('Hello, user. My name is Diego Ramos, and this is my Program. If you want, you can answer these yes/no questions about me.');
alert('remember, yes/no or y/n works all the same.');
var score = 0;
console.log('score at start of game should be 0.', score);
var questionOne = prompt('Do I wear glasses?');
if (questionOne.toUpperCase() === 'Y' || questionOne.toUpperCase() === 'YES' ) {
  alert('Correct!');
  score++;
} else if (questionOne.toUpperCase() === 'N' || questionOne.toUpperCase() === 'NO') {
  alert('Incorrect!');
} else {
  alert('Wrong input!');
}
console.log('question one answer about glasses, correct answer is yes.', questionOne);
console.log('current score: possible points at this stage is 1.', score);
var questionTwo = prompt('Is my nickname Peter?');
if (questionTwo.toUpperCase() === 'Y' || questionTwo.toUpperCase() === 'YES') {
  alert('Incorrect!');
} else if (questionTwo.toUpperCase() === 'N' || questionTwo.toUpperCase() === 'NO') {
  alert('Correct!');
  score++;
} else {
  alert('Wrong input!');
}
console.log('question two answer about nickname, correct answer is no.', questionTwo);
console.log('current score: possible points at this stage is 2.', score);

var questionThree = prompt('Do I go to the Seattle Campus for CodeFellows?');
if (questionThree.toUpperCase() === 'Y' || questionThree.toUpperCase() === 'YES') {
  alert('Correct!');
  score++;
} else if (questionThree.toUpperCase() === 'N' || questionThree.toUpperCase() === 'NO') {
  alert('Incorrect!');
} else {
  alert('Wrong input!');
}
console.log('question three answer about school, correct answer is yes.', questionThree);
console.log('current score: possible points at this stage is 3.', score);


var questionFour = prompt('Do I like sweets/candy?');
if (questionFour.toUpperCase() === 'Y' || questionFour.toUpperCase() === 'YES') {
  alert('Incorrect!');
} else if (questionFour.toUpperCase() === 'N' || questionFour.toUpperCase() === 'NO') {
  alert('Correct!');
  score++;
} else {
  alert('Wrong input!');
}
console.log('question four answer about food, correct answer is no.', questionFour);
console.log('current score: possible points at this stage is 4.', score);


var questionFive = prompt('Is Street Fighter 5 My favorite game?');
if (questionFive.toUpperCase() === 'Y' || questionFive.toUpperCase() === 'YES') {
  alert('Incorrect!');
} else if (questionFive.toUpperCase() === 'N' || questionFive.toUpperCase() === 'NO') {
  alert('Correct!');
  score++;
} else {
  alert('Wrong input!');
}
console.log('question five answer about games, correct answer is no.', questionFive);
console.log('current score: possible points at this stage is 5.', score);


alert('your score was ' + score + ' out of 5.');

