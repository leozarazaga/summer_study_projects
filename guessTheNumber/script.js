
//let secretNumber = document.querySelector('.number').textContent = Math.floor(Math.random() * 20) + 1;
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', () => {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = ("⛔️ No number!")
    }

    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉 you won!';
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
            (guess > secretNumber) ? document.querySelector('.message').textContent = ' 📈 too hight!' : document.querySelector('.message').textContent = '📉 too low!'
        }
        else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = "💀 GAME OVER"
            document.querySelector('body').style.backgroundColor = "#cd4e4e"
        }
    }
})


document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = document.querySelector('.number').textContent = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
})

