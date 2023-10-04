'use strict';

/*console.log(document.querySelector('.message').textContent);
const newMessage = (document.querySelector('.message').textContent =
  '🎉 Correct Number!');
console.log(newMessage);
const number = (document.querySelector('.number').value = 13);
console.log(number);

const quess = (document.querySelector('.guess').value = 23);
console.log(quess);
*/

// secretNumber is in between 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// console.log(secretNumber);

// function for displayMessage
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// saving quessing number by input
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🤔No input...';
    displayMessage('🤔No input...');

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = '🤞Too low!!!';
      displayMessage('🤞Too low!!!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the GAME!!😒';
      displayMessage('You lost the GAME!!😒');
      document.querySelector('.score').textContent = 0;
    }
    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = '🤞Too high!!!';
      displayMessage('🤞Too high!!!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the GAME!!😒';
      displayMessage('You lost the GAME!!😒');
      document.querySelector('.score').textContent = 0;
    }
    // when player guess the number and wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent =
    //   'Congratulations👌,You guess the correct Number!!!';
    displayMessage('Congratulations👌,You guess the correct Number!!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  //   displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
