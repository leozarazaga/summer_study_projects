
// Selecting elements
const player0Element = document.querySelector('.player--0')
const player1Element = document.querySelector('.player--1')

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0')
const current1Element = document.getElementById('current--1')

const diceElement = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//Starting conditions
const initializeGame = () => {
    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;

    diceElement.classList.add('hidden')
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
}

initializeGame()

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = (activePlayer === 0) ? 1 : 0;
    player0Element.classList.toggle('player--active')
    player1Element.classList.toggle('player--active')
};


//Rolling dice functionality
buttonRoll.addEventListener('click', () => {
    if (playing) {
        // 1.Generating a random dice roll
        const dice = Math.floor(Math.random() * 6) + 1;


        // 2. Display dice
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${dice}.png`;


        // 3.Check for rolled 1
        if (dice !== 1) {
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            // Switch to next player
            switchPlayer()
        }
    }
})

buttonHold.addEventListener('click', () => {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 10) {
            //Finish the game
            playing = false;
            diceElement.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        }
        else {
            //Switch to the next player
            switchPlayer();
        }
    }
});

buttonNew.addEventListener('click', initializeGame)