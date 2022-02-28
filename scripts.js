function computerPlay(){
    const option = ['rock', 'paper', 'scissors'];
    let computerSelection = option[Math.floor(Math.random()*option.length)];
    return computerSelection;
}

function playerPlay() {
    let playerSelection = prompt('Choose your weapon...').toLowerCase();
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        playerSelection = prompt(`${playerSelection} is not a valid option, try again.`).toLowerCase();
    }
    return playerSelection;
}

function game() {
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore <= 3 && computerScore <= 3) {
        playRound(playerPlay(), computerPlay());
        console.log(`Round ${++round}: Player ${playerScore} Computer ${computerScore}`);
        if (playerScore === 3){
            alert('Congratulations! you have defeated the computer.');
            break;
        } else if (computerScore === 3) {
            alert('Game Over');
            break;
        } 
    }
    function playRound(playerSelection, computerSelection) {
        switch (playerSelection === playerSelection && computerSelection === computerSelection) {
            case playerSelection === 'rock' && computerSelection === 'scissors':
            case playerSelection === 'scissors' && computerSelection === 'paper':
            case playerSelection === 'paper' && computerSelection === 'rock':
                alert(`You win! ${playerSelection} beats ${computerSelection}!`);
                return (++playerScore);
            case playerSelection === 'scissors' && computerSelection === 'rock':
            case playerSelection === 'paper' && computerSelection === 'scissors':
            case playerSelection === 'rock' && computerSelection === 'paper':
                alert(`You lose...${computerSelection} beats ${playerSelection}`);
                return (++computerScore);
            case playerSelection === 'rock' && computerSelection === 'rock':
            case playerSelection === 'paper' && computerSelection === 'paper':
            case playerSelection === 'scissors' && computerSelection === 'scissors':
                alert('It\'s a tie!, go again.');
                break;
            default:
                alert('Sorry but you need to choose, Rock, Paper or Scissors');
                break;
        }
    }
}

game();
