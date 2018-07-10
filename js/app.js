"use strict";
alert('Hello, user. My name is Diego Ramos, and this is my Program. If you want, you can answer these yes/no questions about me.');
alert('remember, yes/no or y/n works all the same.');
var score = 0; 
console.log('score at start of game should be 0.', score);
var questionOne = prompt('Do I wear glasses?');
if (questionOne.toLowerCase === 'y' || questionOne.toLowerCase === 'yes' ) {
  alert('Correct!');
  score++;
} else if (questionOne.toLowerCase === 'n' || questionOne.toLowerCase === 'no') {
  alert('Incorrect!');
} else{
  alert('Wrong input!');
}
console.log('question one answer.', questionOne);


var questionTwo = prompt('Is my nickname Peter?');
if (questionTwo.toLowerCase === 'y' || questionTwo.toLowerCase === 'yes') {
  alert('Incorrect!');
} else if (questionTwo.toLowerCase === 'n' || questionTwo.toLowerCase === 'no') {
  alert('Correct!');
  score++;
} else {
  alert('Wrong input!');
}
console.log('question two answer.', questionTwo);

var questionThree = prompt('Do I go to the Seattle Campus for CodeFellows?');
if (questionThree.toLowerCase === 'y' || questionThree.toLowerCase === 'yes') {
  alert('Correct!');
  score++;
} else if (questionThree.toLowerCase === 'n' || questionThree.toLowerCase === 'no') {
  alert('Incorrect!');
} else {
  alert('Wrong input!');
}
console.log('question three answer.', questionThree);


var questionFour = prompt('Do I like sweets/candy?');
if (questionFour.toLowerCase === 'y' || questionFour.toLowerCase === 'yes') {
  alert('Incorrect!');
} else if (questionFour.toLowerCase === 'n' || questionFour.toLowerCase === 'no') {
  alert('Correct!');
  score++;
} else {
  alert('Wrong input!');
}
console.log('question four answer.', questionFour);


var questionFive = prompt('Do I go to the Seattle Campus for CodeFellows?');
if (questionFive.toLowerCase === 'y' || questionFive.toLowerCase === 'yes') {
  alert('Correct!');
  score++;
} else if (questionFive.toLowerCase === 'n' || questionFive.toLowerCase === 'no') {
  alert('Incorrect!');
} else {
  alert('Wrong input!');
}
console.log('question two answer.', questionFive);



alert('your score was ' + score + ' out of 5.');