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
    });
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
        checkScore();
        pickOne();
    });
}

function pickOne() {
    clearMainTextArea();
    i = Math.floor(Math.random() * 3);
    if (i === 0) {
        rockButton();
    } else if (i === 1) {
        paperButton();
    } else {
        scissorsButton();
    }
    setTimeout(pickOne, 300);
}

function rockButton() {
    const rockButton = document.createElement('button');
    const mainTextArea = document.querySelector('.mainTextArea');
    rockButton.addEventListener('click', () => {
        playerSelection = rockButton.value;
        computerSelection = computerPlay();
        playRound(playerSelection, computerPlay());
        updateScore();
        checkScore();
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
        checkScore();
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
        checkScore();
    })
    mainTextArea.appendChild(scissorsButton);
    scissorsButton.classList.add('scissorsButton');
    scissorsButton.setAttribute('id', 'scissorsButton');
    scissorsButton.setAttribute('value', 'scissors');
    scissorsButton.textContent = 'SCISSORS';
}

function checkScore() {
    if (playerScore === 3) {
        gameWinMessage();
    } else if (computerScore === 3) {
        gameLoseMessage();
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
            return (++playerScore);
        case playerSelection === 'scissors' && computerSelection === 'rock':
        case playerSelection === 'paper' && computerSelection === 'scissors':
        case playerSelection === 'rock' && computerSelection === 'paper':
            roundLoss();
            return (++computerScore);
        case playerSelection === 'rock' && computerSelection === 'rock':
        case playerSelection === 'paper' && computerSelection === 'paper':
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            roundDraw();
            break;
        default:
            break;
    }
}

function roundWin() {
    containerInner = document.querySelector('.containerInner');

    roundWinMessage = document.createElement('p');
    roundWinMessage.setAttribute('id', 'roundWinMessage');
    roundWinMessage.classList.add('interRoundMessage');
    roundWinMessage.textContent = `YOU WON ${playerSelection.toUpperCase()} BEATS ${computerSelection.toUpperCase()}`;

    tempMessageDiv = document.createElement('div');
    tempMessageDiv.classList.add('tempMessageDiv');

    tempMessageDiv.appendChild(roundWinMessage);
    containerInner.appendChild(tempMessageDiv);
    
    setTimeout(() => {
        containerInner.removeChild(tempMessageDiv)
    }, 1200);
}

function roundLoss() {
    containerInner = document.querySelector('.containerInner');

    roundLossMessage = document.createElement('p');
    roundLossMessage.setAttribute('id', 'roundLossMessage');
    roundLossMessage.classList.add('interRoundMessage');
    roundLossMessage.textContent = `YOU LOSE ${computerSelection.toUpperCase()} BEATS ${playerSelection.toUpperCase()}`;

    tempMessageDiv = document.createElement('div');
    tempMessageDiv.classList.add('tempMessageDiv');

    tempMessageDiv.appendChild(roundLossMessage);
    containerInner.appendChild(tempMessageDiv);
    
    setTimeout(() => {
        containerInner.removeChild(tempMessageDiv)
    }, 1200);
}

function roundDraw() {
    containerInner = document.querySelector('.containerInner');

    roundDrawMessage = document.createElement('p');
    roundDrawMessage.setAttribute('id', 'roundDrawMessage');
    roundDrawMessage.classList.add('interRoundMessage');
    roundDrawMessage.textContent = `IT'S A TIE, GO AGAIN!`;

    tempMessageDiv = document.createElement('div');
    tempMessageDiv.classList.add('tempMessageDiv');

    tempMessageDiv.appendChild(roundDrawMessage);
    containerInner.appendChild(tempMessageDiv);
    
    setTimeout(() => {
        containerInner.removeChild(tempMessageDiv)
    }, 1200);
}

function gameWinMessage() {
    containerInner = document.querySelector('.containerInner');

    gameWinMessage = document.createElement('p');
    gameWinMessage.classList.add('gameWinMessage');
    gameWinMessage.setAttribute('id', 'gameWinMessage');
    gameWinMessage.textContent = 'YOU WIN! \nPLAY AGAIN?';

    reloadButton = document.createElement('button');
    reloadButton.setAttribute('id', 'reloadButton');
    reloadButton.textContent = 'YES';

    tempMessageDiv = document.createElement('div');
    tempMessageDiv.classList.add('tempMessageDiv');
    setTimeout(() => {
        tempMessageDiv.appendChild(gameWinMessage);
        tempMessageDiv.appendChild(reloadButton);
        containerInner.appendChild(tempMessageDiv);
    }, 1400);
    
    reloadButton.addEventListener('click', () => {
        location.reload();
    });
}

function gameLoseMessage() {
    containerInner = document.querySelector('.containerInner');

    gameLoseMessage = document.createElement('p');
    gameLoseMessage.classList.add('gameLoseMessage');
    gameLoseMessage.setAttribute('id', 'gameLoseMessage');
    gameLoseMessage.textContent = 'YOU LOSE... \nPLAY AGAIN?';

    reloadButton = document.createElement('button');
    reloadButton.setAttribute('id', 'reloadButton');
    reloadButton.textContent = 'YES';

    tempMessageDiv = document.createElement('div');
    tempMessageDiv.classList.add('tempMessageDiv');
    setTimeout(() => {
        tempMessageDiv.appendChild(gameLoseMessage);
        tempMessageDiv.appendChild(reloadButton);
        containerInner.appendChild(tempMessageDiv);
    }, 1400);
    
    reloadButton.addEventListener('click', () => {
        location.reload();
    });
}

prepareInstructAnim();
