'use strict';

var user = prompt('What\'s your name?');
alert('Hello,' + user + 'My name is Diego Ramos, and this is my Program. If you want, you can answer these yes/no questions about me.');
alert('remember, yes/no or y/n works all the same.');
var wrong = 'Wrong!';
var right = 'Right!';
var badInput = 'not correct input!';
var correctAnswersSeven = ' The correct answers were 2, 3, and 4.';
var yes = ['Y', 'YES'];
var yesAnswers = [1,3];
var no = ['N', 'NO'];
var noAnswers = [2,4,5];
var random = Math.floor(Math.random() * 10) + 1; 
var tooHigh = 'too high!';
var tooLow = 'too low!';

var questions = [
  'Do I wear glasses?',
  'Is my nickname Peter?',
  'Do I go to the Seattle Campus for CodeFellows?',
  'Do I like sweets/candy?',
  'Is Street Fighter 5 My favorite game?',
  'What number am I thinking of? (between 1 & 10)',
  'Can you guess one of the actually good Street Fighter Games? (from 1 to 5)']

for (var questionNumber = 1; questionNumber < 7; questionNumber){
  var answer = prompt(questions[questionNumber - 1]).toUpperCase;
  if (answer === yes.some && questionNumber === yesAnswers.some){
    alert(right);
  } else if (answer === no.some && questionNumber === noAnswers.some){
    alert(right);
  } else if (questionNumber === 6) {
    for (var sixGuess = 0; sixGuess <= 4; sixGuess++){
      if (answer === random){
        alert(right);
        break;
      } else if (answer < random) {
        alert(tooHigh);
      } else if (answer > random){
        alert(tooLow);
      } else {
        alert(badInput);
      }
    }
  }
  
}