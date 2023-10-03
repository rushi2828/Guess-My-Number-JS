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
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

// saving quessing number by input
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //For no input values
  if (!guess) {
    document.querySelector('.message').textContent = 'No input...';
  } else if (guess < secres) {
  }
});
