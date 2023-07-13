const startElement = document.getElementById('start');
const stopElement = document.getElementById('stop');
const resetElement = document.getElementById('reset');
const timerElement = document.getElementById('timer')

let interval;
let timeLeft = 5;

function updateTimer() {
    let minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    let seconds = String(timeLeft % 60).padStart(2, '0');

    timerElement.innerHTML = `${minutes}:${seconds}`
}

const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer()

        if (timeLeft === 0) {
            clearInterval(interval)
            timeLeft = 1500;
            updateTimer()
        }


        console.log('timer');
    }, 1000)

}

const stopTimer = () => {
    clearInterval(interval)
}

const resetTimer = () => {
    clearInterval(interval)
    timeLeft = 1500;
    updateTimer()
}






startElement.addEventListener('click', startTimer)
stopElement.addEventListener('click', stopTimer)
resetElement.addEventListener('click', resetTimer)
