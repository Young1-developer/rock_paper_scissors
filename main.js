
let i = 0;
let txt = 'Rock, Paper, Scissors?';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("gameh1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        
    }
}



var playerScore = 0;
var computerScore = 0;

function computerMove() {
  const moves = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function determineWinner(userMove, computerMove) {
  if (userMove === computerMove) {
    return 'tie';
  } else if (
    (userMove === 'rock' && computerMove === 'scissors') ||
    (userMove === 'paper' && computerMove === 'rock') ||
    (userMove === 'scissors' && computerMove === 'paper')
  ) {
    playerScore++;
    document.getElementById('playerScore').textContent = playerScore;
    return 'user';
  } else {
    computerScore++;
    document.getElementById('computerScore').textContent = computerScore;
    return 'computer';
  }
}

const choiceButtons = document.querySelectorAll(".choice");
const resultDiv = document.getElementById("output");

choiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (!GameOver()) {
      const userMoveInput = button.id;
      const computerMoveResult = computerMove();
      const winner = determineWinner(userMoveInput, computerMoveResult);

      resultDiv.textContent = `You chose: ${userMoveInput}\n\n;  Computer chose: ${computerMoveResult}\n; `;

      if (winner === 'tie') {
        resultDiv.textContent += "It's a tie!";
      } else {
        resultDiv.textContent += `${winner === 'user' ? 'You win' : 'Computer wins!'}`;
      }

      if (GameOver()) {
        resultDiv.textContent += `\n\n${playerScore === 5 ? 'You have won!' : 'Computer has won!'}`;
      }
    }
  });
});

// function to check if playerScore is greater than or equal to 5
function GameOver(){
  return  playerScore >= 5  || computerScore >= 5;
  
}
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', resetFunc);
// Reset the game
function resetFunc() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('computerScore').textContent = computerScore;
  resultDiv.textContent = "who score 5 point first win the game"; // Clear the result display
  userMoveInput = false;
  computerMoveResult = false; // Fix: Set computerMoveResult to false
  
  
}


typeWriter();





