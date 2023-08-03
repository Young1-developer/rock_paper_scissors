function computerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  }
  
  function getUserMove() {
    let userMove = prompt("Enter your move (rock, paper, or scissors):").toLowerCase();
    const validMoves = ['rock', 'paper', 'scissors'];
  
    while (!validMoves.includes(userMove)) {
      userMove = prompt("Invalid move. Please enter rock, paper, or scissors:").toLowerCase();
    }
  
    return userMove;
  }
  
  function determineWinner(userMove, computerMove) {
    if (userMove === computerMove) {
      return 'tie';
    } else if (
      (userMove === 'rock' && computerMove === 'scissors') ||
      (userMove === 'paper' && computerMove === 'rock') ||
      (userMove === 'scissors' && computerMove === 'paper')
    ) {
      return 'user';
    } else {
      return 'computer';
    }
  }
  
  function playGame() {
    let userMoveInput = getUserMove();
    let computerMoveResult = computerMove();
    let winner = determineWinner(userMoveInput, computerMoveResult);
  
    console.log(`You chose: ${userMoveInput}`);
    console.log(`Computer chose: ${computerMoveResult}`);
  
    if (winner === 'tie') {
      console.log("It's a tie!");
    } else {
      console.log(`${winner === 'user' ? 'You win!' : 'Computer wins!'}`);
    }
  }
  
  playGame();
  