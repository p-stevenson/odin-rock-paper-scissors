let playerSelection;
let computerSelection;

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    // randomly select option from array.
    return options[Math.floor(Math.random() * options.length)];
}

function capitalizeFirstLetter(someString) {
    return (someString[0].toUpperCase() + someString.substring(1));
}

// main game function
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let lose;
    let win;

    // logic for a single round
    function playRound(playerSelection, computerSelection) {
        computerSelection = computerPlay();
        playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
        
        if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
            alert('That is not a valid choice.');
        }

        else if (playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'scissors' ||
            playerSelection === 'scissors' && computerSelection === 'rock') {
            alert('You Lose! ' + capitalizeFirstLetter(computerSelection) + ' beats ' + capitalizeFirstLetter(playerSelection) + '.');
            lose = true;
            return lose;
        }

        else if (playerSelection === 'rock' && computerSelection === 'rock' ||
            playerSelection === 'paper' && computerSelection === 'paper' ||
            playerSelection === 'scissors' && computerSelection === 'scissors') {
            alert('It\s a tie, choose again.');
        }

        else {
            alert('You Win! ' + capitalizeFirstLetter(playerSelection) + ' beats ' + capitalizeFirstLetter(computerSelection) + '.');
            win = true;
            return win;
        }

    }

    do {
        playRound(playerSelection, computerSelection);
        // checks for win or lose in playRound(), increments score and resets win/lose variable.
        if (win) {
            playerScore++;
            win = null;
            console.log('playerScore ' + playerScore);
            if (playerScore === 5) {
                alert('bleep boop...defeated? how can this be...brrrrpppp...');
            }
        }
        else if (lose) {
            computerScore++;
            lose = null;
            console.log('computerScore ' + computerScore);
            if (computerScore === 5) {
                alert('AH..HA..HA...kneel before me puny human...');
            }

        }
    }

    while (playerScore < 5 && computerScore < 5);


}

game();
