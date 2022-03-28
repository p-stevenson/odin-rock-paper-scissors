let computerScore = 0;
let playerScore = 0;
 
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
            updateScore();
            console.log(`Round ${++round}: Player ${playerScore} Computer ${computerScore}`);
        });
    });


    
/*     while (playerScore <= 3 && computerScore <= 3) {
        playRound(playerPlay(), computerPlay());
        if (playerScore === 3) {
            alert('Congratulations! you have defeated the computer.');
            break;
        } else if (computerScore === 3) {
            alert('Game Over');
            break;
        }
    }  */
}


game();

showInstructionsAnimation();


function showInstructionsAnimation(){
    const openingAnimationEnd = document.querySelector('#scissors');

    openingAnimationEnd.addEventListener('animationend', (e) => {
        if(e.animationName === "swipeDown") {
            clearMainTextArea();
            playInstructAnimation();
        };
    });
}

function playInstructAnimation() {
    const infoMessage = ['JUST', 'PICK ', 'ONE.', 'READY?...', 'GO!'];
    const mainTextArea = document.querySelector('.mainTextArea');
    const instructPlayer = document.createElement('p');
    instructPlayer.classList.add('instructPlayer');
    mainTextArea.appendChild(instructPlayer);
    
    for (let i = 0; i < infoMessage.length; i++) {
        delayTime(i);
    }
    function delayTime(i) {
        setTimeout(() => {
            instructPlayer.textContent = infoMessage[i]
        }, 1200 * i);
    };
    setTimeout(() => {
        clearMainTextArea();
        showScore();
    }, 6000);
}

function clearMainTextArea() {
    const mainTextArea = document.querySelector('.mainTextArea');
    const allParagraphs = document.querySelectorAll('div.mainTextArea > p');
    allParagraphs.forEach((p) => {
        mainTextArea.removeChild(p);
    });
}

function showScore() {
    const scoreText = document.querySelectorAll('.score');

    scoreText.forEach((score) => {
        score.style.display = 'block';
    });    
    updateScore();
    showChoices();
}

function updateScore() {
    const cpuScoreText = document.querySelector('#cpuScore');
    const playerScoreText = document.querySelector('#playerScore');    
    cpuScoreText.textContent = `CPU: ${computerScore}`;
    playerScoreText.textContent = `PLAYER: ${playerScore}`;
}



function showChoices() {
    let num = Math.floor(Math.random() * 3);
    for(i = 0; i < 1; i++) {
        if(num === 0) {
            rockButton();
        } else if(num === 1) {
            paperButton();
        } else if(num === 2) {
            scissorsButton();
        }
    }
}

// first thing is to fix button styling.
function rockButton() {
    const rockButton = document.createElement('button');
    const mainTextArea = document.querySelector('.mainTextArea');
    mainTextArea.appendChild(rockButton);
    rockButton.classList.add('rockButton');
    rockButton.setAttribute('id', 'rockButton');
    rockButton.setAttribute('value', 'rock');
    rockButton.textContent = 'ROCK';
    // rockButton.style.display = 'block';
}

function paperButton() {
    const paperButton = document.createElement('button');
    const mainTextArea = document.querySelector('.mainTextArea');
    mainTextArea.appendChild(paperButton);
    paperButton.classList.add('paperButton');
    paperButton.setAttribute('id', 'paperButton');
    paperButton.setAttribute('value', 'paper');
    paperButton.textContent = 'PAPER';
    // paperButton.style.display = 'block';
}

function scissorsButton() {
    const scissorsButton = document.createElement('button');
    const mainTextArea = document.querySelector('.mainTextArea');
    mainTextArea.appendChild(scissorsButton);
    scissorsButton.classList.add('scissorsButton');
    scissorsButton.setAttribute('id', 'scissorsButton');
    scissorsButton.setAttribute('value', 'scissors');
    scissorsButton.textContent = 'SCISSORS';
    // scissorsButton.style.display = 'block';
}


