let displayTimer = document.getElementById('timer');

let timer = 0;
let countdown;

document.getElementById('btn').addEventListener('click', () => {
  const durationInput = document.getElementById('duration');
  const duration = parseInt(durationInput.value);
  console.log(duration);

  if (isNaN(duration) || duration <= 0) {
    displayTimer.textContent = 'Invalid number!';
    return;
  }

  timer = duration;
  updateTimer(); // Update the timer display immediately

  countdown = setInterval(() => {
    timer--;

    updateTimer(); // Update the timer display

    if (timer === 0) {
      clearInterval(countdown);
      durationInput.value = '';
      displayTimer.textContent = '｟⏰｠';
    }
    console.log(timer);
  }, 1000);
});

const updateTimer = () => {
  const min = String(Math.trunc(timer / 60)).padStart(2, '0');
  const sec = String(Math.trunc(timer % 60)).padStart(2, '0');
  document.getElementById('timer').textContent = `${min}:${sec}`;
};
