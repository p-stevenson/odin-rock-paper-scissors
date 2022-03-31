let computerScore = 0;
let playerScore = 0;

function prepareInstructAnim() {
    const openingAnimationEnd = document.querySelector('#scissors');
    
    openingAnimationEnd.addEventListener('animationend', (e) => {
        if (e.animationName === "swipeDown") {
            clearMainTextArea();
            playInstructAnim();
        };
    });
}

function clearMainTextArea() {
    const mainTextArea = document.querySelector('.mainTextArea');
    const allParagraphs = document.querySelectorAll('div.mainTextArea > p');
    const allButtons = document.querySelectorAll('div.mainTextArea > button');
    
    allParagraphs.forEach((p) => {
        mainTextArea.removeChild(p);
    });
    allButtons.forEach((button) => {
        mainTextArea.removeChild(button);
    })
}

function playInstructAnim() {
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
        startGame();
    }, 6000);
}

function startGame() {
    const scoreText = document.querySelectorAll('.score');
    
    scoreText.forEach((score) => {
        score.style.display = 'block';
        pickOne();
    });
    
}

function pickOne() {
    checkScore();
    clearMainTextArea();
    i = Math.floor(Math.random() * 3);
    if (i === 0) {
        rockButton();
    } else if (i === 1) {
        paperButton();
    } else {
        scissorsButton();
    }
    setTimeout(pickOne(), 300);
}

function rockButton() {
    const rockButton = document.createElement('button');
    const mainTextArea = document.querySelector('.mainTextArea');
    rockButton.addEventListener('click', () => {
        playerSelection = rockButton.value;
        computerSelection = computerPlay();
        playRound(playerSelection, computerPlay());
        updateScore();
    });
    mainTextArea.appendChild(rockButton);
    rockButton.classList.add('rockButton');
    rockButton.setAttribute('id', 'rockButton');
    rockButton.setAttribute('value', 'rock');
    rockButton.textContent = 'ROCK';
}

function paperButton() {
    const paperButton = document.createElement('button');
    const mainTextArea = document.querySelector('.mainTextArea');
    paperButton.addEventListener('click', () => {
        playerSelection = paperButton.value;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        updateScore();
    });
    mainTextArea.appendChild(paperButton);
    paperButton.classList.add('paperButton');
    paperButton.setAttribute('id', 'paperButton');
    paperButton.setAttribute('value', 'paper');
    paperButton.textContent = 'PAPER';
}

function scissorsButton() {
    const scissorsButton = document.createElement('button');
    const mainTextArea = document.querySelector('.mainTextArea');
    scissorsButton.addEventListener('click', () => {
        playerSelection = scissorsButton.value;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        updateScore();
    })
    mainTextArea.appendChild(scissorsButton);
    scissorsButton.classList.add('scissorsButton');
    scissorsButton.setAttribute('id', 'scissorsButton');
    scissorsButton.setAttribute('value', 'scissors');
    scissorsButton.textContent = 'SCISSORS';
}

function checkScore() {
    if (playerScore === 3) {
        console.log('you win');
        location.reload();
    } else if (computerScore === 3) {
        console.log('you lose');
        location.reload();
    }
}

function updateScore() {
    const cpuScoreText = document.querySelector('#cpuScore');
    const playerScoreText = document.querySelector('#playerScore');
    cpuScoreText.textContent = `CPU: ${computerScore}`;
    playerScoreText.textContent = `PLAYER: ${playerScore}`;
}

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
            roundWin();
            // alert(`You win! ${playerSelection} beats ${computerSelection}!`);
            return (++playerScore);
        case playerSelection === 'scissors' && computerSelection === 'rock':
        case playerSelection === 'paper' && computerSelection === 'scissors':
        case playerSelection === 'rock' && computerSelection === 'paper':
            roundLoss();
            // alert(`You lose...${computerSelection} beats ${playerSelection}`);
            return (++computerScore);
        case playerSelection === 'rock' && computerSelection === 'rock':
        case playerSelection === 'paper' && computerSelection === 'paper':
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            roundDraw();
            // alert('It\'s a tie!, go again.');
            break;
        default:
            break;
    }
}

function roundWin(){
    clearMainTextArea();
    mainTextArea = document.querySelector('.mainTextArea');
    roundWinMessage = document.createElement('p');
    roundWinMessage.setAttribute('id', 'roundWinMessage');
    roundWinMessage.classList.add('interRoundMessage');
    roundWinMessage.textContent = `YOU WON THIS ROUND, ${playerSelection} beats ${computerSelection}`;
    mainTextArea.appendChild(roundWinMessage);
}
function roundLoss(){
    clearMainTextArea();
    mainTextArea = document.querySelector('.mainTextArea');
    roundLossMessage = document.createElement('p');
    roundLossMessage.setAttribute('id', 'roundLossMessage');
    roundLossMessage.classList.add('interRoundMessage');
    roundLossMessage.textContent = `YOU LOST THIS ROUND, ${computerSelection} beats ${playerSelection}`;
    mainTextArea.appendChild(roundLossMessage);
}
function roundDraw(){
    clearMainTextArea();
    mainTextArea = document.querySelector('.mainTextArea');
    roundDrawMessage = document.createElement('p');
    roundDrawMessage.setAttribute('id', 'roundDrawMessage');
    roundDrawMessage.classList.add('interRoundMessage');
    roundDrawMessage.textContent = `IT'S A TIE, GO AGAIN!`;
    mainTextArea.appendChild(roundDrawMessage);
}

prepareInstructAnim();