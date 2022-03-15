let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const option = ['rock', 'paper', 'scissors'];
    let computerSelection = option[Math.floor(Math.random() * option.length)];
    return computerSelection;
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

function game() {
    let round = 0;
    const playersChoice = document.querySelectorAll('button');
    playersChoice.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.value;
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            console.log(`Round ${++round}: Player ${playerScore} Computer ${computerScore}`);
        });
    });
    /* while (playerScore <= 3 && computerScore <= 3) {
        playRound(playerPlay(), computerPlay());
        if (playerScore === 3) {
            alert('Congratulations! you have defeated the computer.');
            break;
        } else if (computerScore === 3) {
            alert('Game Over');
            break;
        }
    } */
}


game();
