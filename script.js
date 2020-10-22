buttonSetup();

let playerScore = 0;
let computerScore = 0;

/**
 * Sets up the rock, paper, and scissors buttons
 */
function buttonSetup() {
  const buttons = getButtons();

  for (let i = 0; i < buttons.length; i++) {
    const currentButton = buttons[i];

    // to pass an argument to an eventListener function, we use .bind(null,
    // arg1, arg2, ...)
    currentButton.addEventListener('click',
        buttonFunction.bind(null, currentButton));
  }
}

/**
 * Gets the rock, paper, and scissors buttons
 * @return {Array} An array containing the rock, paper, and scissors buttons
 */
function getButtons() {
  const buttons = [];
  buttons.push(document.querySelector(`button[id="rock"]`));
  buttons.push(document.querySelector(`button[id="paper"]`));
  buttons.push(document.querySelector(`button[id="scissors"]`));

  return buttons;
}

/**
 * Adds functionality to a button, determining the winner, updating the results
 * and score
 * @param {Button} button
 */
function buttonFunction(button) {
  const winner = playRound(button.id, computerPlay());
  appendToResults(winner);

  if (winner === 'player') {
    playerScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }

  updateScore();
}

/**
 * Appends the results of a round to the results div
 * @param {string} winner The winner of a given round (computer, player, or
 * draw)
 */
function appendToResults(winner) {
  const resultsDiv = document.querySelector('#results');
  const winnerDiv = document.createElement('p');
  winnerDiv.textContent = winner;

  resultsDiv.appendChild(winnerDiv);
}

/**
 * Updates the score
 */
function updateScore() {
  const playerScoreDiv = document.querySelector('#player-score');
  playerScoreDiv.textContent = `player: ${playerScore}`;
  const computerScoreDiv = document.querySelector('#computer-score');
  computerScoreDiv.textContent = `computer: ${computerScore}`;

  if (playerScore == 5 || computerScore == 5) {
    disableButtons();
  }
}

/**
 * Disables the rock, paper, and scissors buttons
 */
function disableButtons() {
  const buttons = getButtons();

  for (let i = 0; i < buttons.length; i++) {
    const currentButton = buttons[i];
    currentButton.setAttribute('disabled', true);
  }
}

/**
 * Generates a random rock-paper-scissors hand
 * @return {string} A random rock-paper-scissors hand
 */
function computerPlay() {
  const hands = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex];
}

/**
 * Plays a round of rock-paper-scissors
 * @param {string} playerSelection The player's hand
 * @param {string} computerSelection The computer's hand
 * @return {string} The winner of the round (player, computer, or draw)
 */
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'draw';
  }

  switch (playerSelection) {
    case 'rock':
      if (determineWinnerRock(computerSelection)) {
        return 'player';
      } else {
        return 'computer';
      }
    case 'paper':
      if (determineWinnerPaper(computerSelection)) {
        return 'player';
      } else {
        return 'computer';
      }
    case 'scissors':
      if (determineWinnerScissors(computerSelection)) {
        return 'player';
      } else {
        return 'computer';
      }
  }
}

/**
 * Determines the winner if the player chooses Rock
 * @param {string} computerSelection The computer's hand
 * @return {boolean} True if the player wins, false otherwise
 */
function determineWinnerRock(computerSelection) {
  if (computerSelection === 'paper') {
    return false;
  } else if (computerSelection === 'scissors') {
    return true;
  }
}

/**
 * Determines the winner if the player chooses Paper
 * @param {string} computerSelection The computer's hand
 * @return {boolean} True if the player wins, false otherwise
 */
function determineWinnerPaper(computerSelection) {
  if (computerSelection === 'rock') {
    return true;
  } else if (computerSelection === 'scissors') {
    return false;
  }
}

/**
 * Determines the winner if the player chooses Scissors
 * @param {string} computerSelection The computer's hand
 * @return {boolean} True if the player wins, false otherwise
 */
function determineWinnerScissors(computerSelection) {
  if (computerSelection === 'rock') {
    return true;
  } else if (computerSelection === 'paper') {
    return false;
  }
}
