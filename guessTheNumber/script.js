//LEARNING HOW TO REFACTOR

let secretNumber;
let highscore = 0;
let score;


const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const bodyElement = document.querySelector('body');

let initializeGame = () => {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;

    displayMessage('Start guessing...');
    setNumberText('?');
    setScore(score);
    setHighScore(highscore);
    setBodyBackgroundColor('#222');
    setNumberWidth('15rem');
}

let displayMessage = (message) => {
    messageElement.textContent = message;
}

let setNumberText = (text) => {
    numberElement.textContent = text;
}

let setScore = (value) => {
    scoreElement.textContent = value;
}

let setHighScore = (value) => {
    highscoreElement.textContent = value;
}

let setBodyBackgroundColor = (color) => {
    bodyElement.style.backgroundColor = color;
}

let setNumberWidth = (width) => {
    numberElement.style.width = width;
}

let handleCheckButtonClick = () => {
    const guess = Number(guessInput.value);


    if (!guess) {
        displayMessage("⛔️ No number!");
        return;
    }

    if (guess === secretNumber) {
        handleCorrectGuess();
    }
    else {
        handleIncorrectGuess(guess);
    }
}

let handleCorrectGuess = () => {
    setNumberText(secretNumber);
    displayMessage('🎉 You won!');
    setBodyBackgroundColor('#60b347');
    setNumberWidth('45rem');

    if (score > highscore) {
        highscore = score;
        setHighScore(highscore);
    }
}

let handleIncorrectGuess = (guess) => {
    if (score > 1) {
        score--;
        setScore(score);
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    }
    else {
        setScore(0);
        displayMessage("💀 GAME OVER")
        setBodyBackgroundColor('#cd4e4e');
        setNumberText(secretNumber);
    }
}

function handlePlayAgainButtonClick() {
    initializeGame();
    guessInput.value = '';

}


document.querySelector('.check').addEventListener('click', handleCheckButtonClick);
document.querySelector('.again').addEventListener('click', handlePlayAgainButtonClick)

initializeGame()


// - - - - - - - - - - - - - - - - - - O L D  C O D E - - - - - - - - - - - - - - - - - - 

/* //let secretNumber = document.querySelector('.number').textContent = Math.floor(Math.random() * 20) + 1;
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', () => {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage("⛔️ No number!")
    }

    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('🎉 you won!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.highscore').textContent = score;
        document.querySelector('.number').style.width = '45rem';
        document.querySelector('.number').textContent = 'correct'.toLocaleUpperCase();

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        };
    }

    if (guess !== secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        }
        else {
            document.querySelector('.score').textContent = 0;
            displayMessage("💀 GAME OVER")
            document.querySelector('body').style.backgroundColor = "#cd4e4e"
        }
    }
})


document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = document.querySelector('.number').textContent = Math.floor(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
}) */