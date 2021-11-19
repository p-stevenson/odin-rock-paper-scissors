/*
Declare a function called computerPlay
This function will randomly return a string, either Rock, Paper or Scissors.
This function will be used when it's the computers turn in our game.
*/


// create variable called options
// assign array of strings to it.
const options = ['Rock', 'Paper', 'Scissors'];
// declare function computerPlay
function computerPlay() {
    // select and return item from array based on randomly generated number.
    return options[Math.floor(Math.random() * options.length)].toLowerCase();
    // Math.floor will round down the value so the result is never greater than length.
}

function capitalizeFirst(someString) {
    return (someString[0].toUpperCase() + someString.substring(1));
}

// create const variable playerSelection = prompt('Rock, Paper, Scissors?')
const playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
// create const variable computerSelection = computerPlay()
const computerSelection = computerPlay();
// declare function called playRound()
// function has two parameters playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    
// TODO consider if there is a simpler way to create win condition...
//      move if to else if and add invalid input condition...
//  if else statement to check for win condition.
//  RPS logic
//  first check if playerSelection is valid.
    if 
        (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
//          return invalid choice message            
            alert('That is not a valid choice.');
    }

//  then check for a losing condition
    else if (playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'scissors' ||
            playerSelection === 'scissors' && computerSelection === 'rock') {
//              return You Lose message if condition met.
                alert('You Lose! ' + capitalizeFirst(computerSelection) + ' beats ' + capitalizeFirst(playerSelection) + '.');
        }
//  then check for tie condition.
    else if (playerSelection === 'rock' && computerSelection === 'rock' ||
            playerSelection === 'paper' && computerSelection === 'paper' ||
            playerSelection === 'scissors' && computerSelection === 'scissors') {
//              return it's a tie message.
                alert('It\s a tie, choose again.');
        }
//          else return you win.
    else {
            alert('You Win! ' + capitalizeFirst(playerSelection) + ' beats ' + capitalizeFirst(computerSelection) + '.');
    }
    
}

playRound(playerSelection, computerSelection);



