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


// TODO tidy up pseudocode...
//      consider if there is a simpler way to create win condition...


//console.log(computerPlay());

// create const variable playerSelection = prompt('Rock, Paper, Scissors?')
// create const variable computerSelection = computerPlay()
// make variables case insensitive.
// declare function called playRound()
// function has two parameters playerSelection and computerSelection
const playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
            return('You Lose! ' + computerSelection[0].toUpperCase() + computerSelection.substring(1) + ' beats ' + playerSelection[0].toUpperCase() + playerSelection.substring(1) + '.');
        }
        else {
            return('You Win! ' + playerSelection[0].toUpperCase() + playerSelection.substring(1) + ' beats ' + computerSelection[0].toUpperCase() + computerSelection.substring(1) + '.');
    }
    
}

console.log(playRound(playerSelection, computerSelection));
// add logic for win/lose condition.
// use logical operators to test for winning condition
// return appropriate string based on outcome.



