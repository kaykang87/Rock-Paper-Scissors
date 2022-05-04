const choices = ['rock', 'paper', 'scissors'];
const winners = [];

// plays the game 5 times and logs its results
function game() {
    for (let i = 1; i <= 5; i++) {
        let round = i;
        let pPlay = playerPlay();
        let cPlay = computerPlay();
        let winner = playRound(pPlay, cPlay);
        // push the winners results to array every time the game is played
        winners.push(winner);
        // logs the winner of each round
        logRound(pPlay, cPlay, winner, round);
    }
    document.querySelector('button').textContent = 'Play New Game'
    // logs the overall winner of the total rounds
    logWins();
}

// function to get random play from computer
function computerPlay() {
    cPlay = choices[Math.floor(Math.random() * choices.length)];  
    return cPlay;
}

// get user input and validates
function playerPlay () {    
    let input = prompt("Pick your play! Rock, Paper, or Scissors: ");
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Please check your spelling! Type Rock, Paper, or Scissors: ");
        while (input == null) {
            input = prompt("Pick your play! Rock, Paper, or Scissors: ");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

// check if user input is included in the array of [rock,paper,scissors]
function validateInput(choice) {
    return choices.includes(choice);
}

// function to check the winner
function playRound(playerSelection, computerSelection) {     
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'Draw!';
        } else if (computerSelection === 'paper') {
            return 'Computer Wins!';
        } else {
            return 'Player win!';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            return 'Draw!';
        } else if (computerSelection === 'rock') {
            return 'Computer Wins!';
        } else {
            return 'Player win!';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            return 'Draw!';
        } else if (computerSelection === 'scissors') {
            return 'Computer Wins!';
        } else {
            return 'Player Win!';
        }
    } else {
        return 'Wrong Input!'
    }
}

// creates new arrays with each wins by filtering through the results
function logWins() {
    let playerWins = winners.filter(item => item == 'Player win!').length;
    let computerWins = winners.filter(item => item == 'Computer Wins!').length;
    let draw = winners.filter(item => item == 'Draw!').length;
    console.log('Results: ');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Draws:', draw);
}

function logRound(playerSelection, computerSelection, winner, round) {
    console.log('Round:', round);
    console.log('Player chose:', playerSelection);
    console.log('Computer chose:', computerSelection);
    console.log(winner);
    console.log('-------------------------------');
}