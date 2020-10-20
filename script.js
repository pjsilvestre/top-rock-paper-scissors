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
 * @return {string} The round result
 */
function playRound(playerSelection, computerSelection) {
  if (!isValidHand(playerSelection)) {
    return `${playerSelection} is an invalid hand`;
  } else if (!isValidHand(computerSelection)) {
    return `${computerSelection} is an invalid hand`;
  }

  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return 'Draw!';
  }

  switch (playerSelection) {
    case 'rock':
      return determineWinnerRock(computerSelection);
    case 'paper':
      return determineWinnerPaper(computerSelection);
    case 'scissors':
      return determineWinnerScissors(computerSelection);
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
 * @return {string} The match result
 */
function determineWinnerRock(computerSelection) {
  if (computerSelection === 'paper') {
    return 'You lose! Paper beats Rock!';
  } else if (computerSelection === 'scissors') {
    return 'You win! Rock beats Scissors!';
  }
}

/**
 * Determines the winner if the player chooses Paper
 * @param {string} computerSelection The computer's hand
 * @return {string} The match result
 */
function determineWinnerPaper(computerSelection) {
  if (computerSelection === 'rock') {
    return 'You win! Paper beats Rock!';
  } else if (computerSelection === 'scissors') {
    return 'You lose! Scissors beats Paper!';
  }
}

/**
 * Determines the winner if the player chooses Scissors
 * @param {string} computerSelection The computer's hand
 * @return {string} The match result
 */
function determineWinnerScissors(computerSelection) {
  if (computerSelection === 'rock') {
    return 'You lose! Rock beats Scissors!';
  } else if (computerSelection === 'paper') {
    return 'You win! Scissors beats Paper!';
  }
}
