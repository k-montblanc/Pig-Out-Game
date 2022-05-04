'use strict';

//called score0El t show it is a DOM element

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

//starting conditions
let currentScore = 0;
let activePlayer = 0;
let playing = true;
//Player 1 begins
//Total scores scored in array
let scores = [0, 0];
diceEl.classList.add('hidden');
const init = () => {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  //Player 1 begins
  //Total scores scored in array

  document.getElementById(
    `name--${activePlayer}`
  ).textContent = `Player ${activePlayer} `;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  score0El.textContent = 0;
  score1El.textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  diceEl.classList.add('hidden');
};
init();
//rolling dice functionality
const switchActive = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
buttonRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate a random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Remove this line before final product
    console.log(dice);
    //2.Display Dice
    //Remove Hidden ccondioition
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.Check for a rolled 1; If true switch to next player
    if (dice !== 1) {
      currentScore += dice;
      //dynamically change score element based on active player

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // If true switch to next player/
      switchActive();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to score of active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check score to see if they have reached 100
    //If yes, finish game
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      document.getElementById(`name--${activePlayer}`).textContent = 'Winner!';
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchActive();
    }

    //If no, switch to the next player
  }
});

buttonNew.addEventListener('click', init);

// document.getElementById(
//   `name--${activePlayer}`
// ).textContent = `Player ${activePlayer} `;
// document
//   .querySelector(`.player--${activePlayer}`)
//   .classList.remove('player--winner');
// playing = true;
// currentScore = 0;
// activePlayer = 0;
// diceEl.classList.add('hidden');
// scores = [0, 0];
// score0El.textContent = 0;
// score1El.textContent = 0;
// document.getElementById('current--0').textContent = 0;
// document.getElementById('current--1').textContent = 0;
