'use strict';

// document.querySelector('.between').textContent = 'Hello Bolac';

// document.querySelector('.guess').value = 15;

// const do =function () {
//     console.log(document.querySelector('.guess').value);
//     document.querySelector('.message').textContent= 'start ';
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   if (!guess) {
//     document.querySelector('.message').textContent =
//       'Oops Please type a Number!';
//   }
// });

// document.querySelector('.check').addEventListener('click', function () {
//   document.querySelector('.message').textContent = '52';
// });

let score = 20;

let randomNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No input!';
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 1) {
      document.querySelector('.message').textContent = ' 🤦‍♂️ You Lost the game';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 1) {
      document.querySelector('.message').textContent = '🤦‍♂️ You Lost the game';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '✔ Hola You Win!';

    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = '😊 Start guessing...';
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  // console.log(score, randomNumber);
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
