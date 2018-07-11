'use strict';

var user = prompt('What\'s your name?');
alert('Hello,' + user + 'My name is Diego Ramos, and this is my Program. If you want, you can answer these yes/no questions about me.');
alert('remember, yes/no or y/n works all the same.');
var wrong = 'Wrong!';
var right = 'Right!';
var badInput = 'not correct input!';
var correctAnswersSevenMsg = ' The correct answers were 2, 3, and 4.';
var yes = ['Y', 'YES'];
var yesAnswers = [1,3];
var no = ['N', 'NO'];
var noAnswers = [2,4,5];
var random = Math.floor(Math.random() * 10) + 1; 
var tooHigh = 'too high!';
var tooLow = 'too low!';
var correctAnswersSeven = [2, 3, 4];
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

var questions = [
  'Do I wear glasses?',
  'Is my nickname Peter?',
  'Do I go to the Seattle Campus for CodeFellows?',
  'Do I like sweets/candy?',
  'Is Street Fighter 5 My favorite game?',
  'What number am I thinking of? (between 1 & 10)',
  'Can you guess one of the actually good Street Fighter Games? (from 1 to 5)'];

var consoleLogQuestions = [
  'q1 about glasses, answer is yes',
  'q2 about nickname, answer is no',
  'q3 about school, answer is yes',
  'q4 about candy, answer is no',
  'q5 about sf, answer is no',
  'q6 about number, number is random',
  'q7 about good sf games, answer is 2, 3, 4'
];

function checkAnswer() {
  return true;
}

for (var questionNumber = 1; questionNumber < 7; questionNumber){
  var answer = prompt(questions[questionNumber - 1]).toUpperCase();
  if (answer === yes.some(checkAnswer) && questionNumber === yesAnswers.some(checkAnswer)){
    alert(right);
    score++;
  } else if (answer === no.some(checkAnswer) && questionNumber === noAnswers.some(checkAnswer)){
    alert(right);
    score++;
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
      answer = prompt(questions[questionNumber - 1]).toUpperCase();
    }
  } else if (questionNumber === 7) {
    for (var sevenGuess = 0; sevenGuess <= 6; sevenGuess++){
      if (answer === correctAnswersSeven.some(checkAnswer))  {
        alert(right);
        break;
      } else if (answer !== correctAnswersSeven.some(checkAnswer)) {
        alert(wrong);
      } else {
        alert(badInput);
      }
    }
    alert(correctAnswersSevenMsg);
  } else if (answer !== yes.some(checkAnswer) && questionNumber === yesAnswers.some(checkAnswer)) {
    alert(wrong);
  } else if (answer !== no.some(checkAnswer) && questionNumber === noAnswers.some(checkAnswer)) {
    alert(wrong);
  } else {
    alert(badInput);
  }
  console.log(consoleLogQuestions[questionNumber - 1], score);
}

var scoretotal = 'Your score is: ';
var outOfSeven = ' out of 7.';
alert(scoretotal + score + outOfSeven);

switch (score) {
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