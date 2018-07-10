"use strict";

alert('Hello, user. My name is Diego Ramos, and this is my Program. If you want, you can answer these yes/no questions about me.');
alert('remember, yes/no or y/n works all the same.');
var score = 0;
console.log('score at start of game should be 0.', score);
var questionOne = prompt('Do I wear glasses?');
if (questionOne.toUpperCase === 'Y' || questionOne.toUpperCase === 'YES' ) {
  alert('Correct!');
} else if (questionOne.toUpperCase === 'N' || questionOne.toUpperCase === 'NO') {
  alert('Incorrect!');
} else {
  alert('Wrong input!');
}
console.log('question one answer.', questionOne);


var questionTwo = prompt('Is my nickname Peter?');
if (questionTwo.toUpperCase === 'Y' || questionTwo.toUpperCase === 'YES') {
  alert('Incorrect!');
} else if (questionTwo.toUpperCase === 'N' || questionTwo.toUpperCase === 'NO') {
  alert('Correct!');
} else {
  alert('Wrong input!');
}
console.log('question two answer.', questionTwo);

var questionThree = prompt('Do I go to the Seattle Campus for CodeFellows?');
if (questionThree.toUpperCase === 'Y' || questionThree.toUpperCase === 'YES') {
  alert('Correct!');
} else if (questionThree.toUpperCase === 'N' || questionThree.toUpperCase === 'NO') {
  alert('Incorrect!');
} else {
  alert('Wrong input!');
}
console.log('question three answer.', questionThree);


var questionFour = prompt('Do I like sweets/candy?');
if (questionFour.toUpperCase === 'Y' || questionFour.toUpperCase === 'YES') {
  alert('Incorrect!');
} else if (questionFour.toUpperCase === 'NO' || questionFour.toUpperCase === 'NO') {
  alert('Correct!');
} else {
  alert('Wrong input!');
}
console.log('question four answer.', questionFour);


var questionFive = prompt('Do I go to the Seattle Campus for CodeFellows?');
if (questionFive.toUpperCase === 'Y' || questionFive.toUpperCase === 'YES') {
  alert('Correct!');
} else if (questionFive.toUpperCase === 'N' || questionFive.toUpperCase === 'NO') {
  alert('Incorrect!');
} else {
  alert('Wrong input!');
}
console.log('question five answer.', questionFive);



alert('your score was ' + score + ' out of 5.');