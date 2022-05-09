const choices = ["rock", "paper", "scissors"];
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const scoreMessage = document.getElementById("scoreMessage");
const restart = document.getElementById("restart");
let roundWinner = "";
let playerScore = 0;
let computerScore = 0;

function startGame() {
  rockBtn.addEventListener("click", () => {
    playRound(rockBtn.id);
    rockBtn.style.transition = "all 1s";
  });
  paperBtn.addEventListener("click", () => {
    playRound(paperBtn.id);
    rockBtn.style.transition = "all 1s";
  });
  scissorsBtn.addEventListener("click", () => {
    playRound(scissorsBtn.id);
    rockBtn.style.transition = "all 1s";
  });
}

function playRound(playerSelection) {
  const computerSelection = computerSelect();
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
  // if player wins, increment playerScore and set winner as player.
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    roundWinner = "player";
  }
  // if computer wins, increment computerScore and set winner as computer.
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    roundWinner = "computer";
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

// function to get random play from computer
function computerSelect() {
  cPlay = choices[Math.floor(Math.random() * choices.length)];
  return cPlay;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === "player") {
    playerScore++;
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${capitalizeFirstLetter(
      computerSelection
    )}. Player ${playerScore} : Computer ${computerScore}.`;
    if (playerScore === 5) {
      scoreMessage.textContent = `Player Won! ${playerScore} : ${computerScore}`;
      refreshPage();
    }
  }
  if (winner === "computer") {
    computerScore++;
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is beaten by ${capitalizeFirstLetter(
      computerSelection
    )}. Player ${playerScore} : Computer ${computerScore}.`;
    if (computerScore === 5) {
      scoreMessage.textContent = `Computer Won! ${computerScore} : ${playerScore}`;
      refreshPage();
    }
  }
  if (winner === "tie") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} ties with ${capitalizeFirstLetter(
      computerSelection
    )}. Player ${playerScore} : Computer ${computerScore}.`;
  }
  return;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function refreshPage() {
  restart.setAttribute(
    "style",
    "border: 1px solid black; background-color: green; width: 150px; padding: 10px 0px; text-align: center;"
  );
  restart.textContent = "RESTART!";
  restart.addEventListener("click", () => {
    window.location.reload();
  });
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
  restart.addEventListener("mouseover", () => {
    restart.style.cursor = "pointer";
    restart.style.backgroundColor = "rgba(81,190,217,255)";
  });
  restart.addEventListener("mouseout", () => {
    restart.style.cursor = "default";
    restart.style.backgroundColor = "green";
  });
}

startGame();
