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
  if (!isValidHand(playerSelection)) {
    return `${playerSelection} is an invalid hand`;
  } else if (!isValidHand(computerSelection)) {
    return `${computerSelection} is an invalid hand`;
  }

  playerSelection = playerSelection.toLowerCase();
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
 * Determines if a given rock-paper-scissors hand is valid
 * @param {string} hand The hand to test
 * @return {boolean} True if the hand is valid, false otherwise
 */
function isValidHand(hand) {
  const validHands = ['rock', 'paper', 'scissors'];
  if (validHands.includes(hand.toLowerCase())) {
    return true;
  } else {
    return false;
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

/**
 * Plays 5 rounds of rock-paper-scissors
 */
function game() {
  let roundsPlayed = 0;
  let playerScore = 0;
  let computerScore = 0;

  while (roundsPlayed < 5) {
    const playerHand = prompt('rock, paper, or scissors?');
    const computerHand = computerPlay();
    const result = playRound(playerHand, computerHand);

    if (result === 'player') {
      console.log(`${playerHand} beats ${computerHand}! You won this round!`);
      playerScore++;
    } else if (result === 'computer') {
      console.log(`${computerHand} beats ${playerHand}! You lost this round!`);
      computerScore++;
    } else {
      console.log('Round draw!');
    }

    roundsPlayed++;
  }

  if (playerScore > computerScore) {
    console.log('You won the game!');
  } else if (playerScore < computerScore) {
    console.log('You lost the game!');
  } else {
    console.log('Game draw!');
  }
}
