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
    return options[Math.floor(Math.random() * options.length)];
    // Math.floor will round down the value so the result is never greater than length.
}

console.log(computerPlay());


// return value.

