'use strict';

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2023-06-23T09:15:04.904Z',
    '2023-06-24T10:17:24.185Z',
    '2023-06-25T14:11:59.604Z',
    '2023-06-26T17:01:17.194Z',
    '2023-06-25T23:36:17.929Z',
    '2023-06-28T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//FUNCTIONS
const formatMovementDate = (date, locale) => {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
}

const formatCurrency = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value)
}

const displayMovement = (acc, sort = false) => {
  containerMovements.innerHTML = ""
  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach((mov, i) => {
    const type = (mov > 0) ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i])
    const displayDate = formatMovementDate(date, acc.locale)

    const formattedMov = formatCurrency(mov, acc.locale, acc.currency)

    const html = `
        <div class="movements__row">
           <div class="movements__type movements__type--${type}"> ${i + 1} ${type} </div>
           <div class="movements__date">${displayDate}</div>
            <div class="movements__value">${formattedMov}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
}



//Calculating the balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0)

  labelBalance.textContent = formatCurrency(acc.balance, acc.locale, acc.currency)
}



//Display Summary
const calcDisplaySumary = (acc) => {
  const incomes = acc.movements.filter((mov) => mov > 0).reduce((acc, curr) => acc + curr);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

  const outcome = acc.movements.filter((val) => val < 0).reduce((acc, curr) => acc + curr);
  labelSumOut.textContent = formatCurrency(Math.abs(outcome), acc.locale, acc.currency);

  const interest = acc.movements.filter((val) => val > 0).map((desposit) => desposit * acc.interestRate / 100).filter((interest, i, array) => {
    // console.log(array);
    return interest >= 1
  }).reduce((acc, interest) => acc + interest, 0)
  labelSumInterest.textContent = formatCurrency(interest, acc.locale, acc.currency);
}



//Creating usernames
const createUsernames = (accs) => {
  accs.forEach((acc) => acc.username = acc.owner.toLowerCase().split(' ').map((name) => name[0]).join(''));
}
createUsernames(accounts)
// console.log(accounts);



//Update UI Function
const updateUI = (acc) => {
  //Display movements
  displayMovement(acc)

  //Display balance
  calcDisplayBalance(acc)

  //Display summary
  calcDisplaySumary(acc)
}

const startLogOutTimer = () => {

  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    //In each call, print remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;


    //When 0 seconds, stop time and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started'
      containerApp.style.opacity = 0;
    }
    //Decrease 1 second
    time--;
  }
  //Set time to 5min
  let time = 120;

  //Call the timer every second
  tick()
  const timer = setInterval(tick, 1000)
  return timer;
}


//Event handlers
let currentAccount, timer;


//FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount)
// containerApp.style.opacity = 100;



//Loggin button
btnLogin.addEventListener('click', (e) => {
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find((acc) => acc.username === inputLoginUsername.value)
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    //Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long'
    };
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

    // - - - VERSION 2 - - -
    // const now = new Date();
    // let day = `${now.getDate()}`.padStart(2, 0);
    // let month = `${now.getMonth() + 1}`.padStart(2, 0);
    // let year = now.getFullYear();
    // let hour = `${now.getHours()}`.padStart(2, 0);
    // let min = `${now.getMinutes()}`.padStart(2, 0);
    //labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;


    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur();

    //Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    updateUI(currentAccount)
  }
})


//Transfering money
btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find((acc) => acc.username === inputTransferTo.value)

  inputTransferAmount.value = inputTransferTo.value = ''

  //Doing the transfer
  if (amount > 0 && reciverAcc && currentAccount.balance >= amount && reciverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount)
    reciverAcc.movements.push(amount)

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString())
    reciverAcc.movementsDates.push(new Date().toISOString())

    //Update UI
    updateUI(currentAccount)

    // Reset timer
    clearInterval(timer)
    timer = startLogOutTimer();
  }
})


//Requiring loan
btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value)
  if (amount > 0 && currentAccount.movements.some((move) => move >= amount * 0.1)) {

    setTimeout(function () {

      //Add movement
      currentAccount.movements.push(amount)

      //Add loan date
      currentAccount.movementsDates.push(new Date().toISOString())

      //Update UI
      updateUI(currentAccount)

      // Reset timer
      clearInterval(timer)
      timer = startLogOutTimer();

    }, 2500);
  }

  inputLoanAmount.value = '';

})



//Deleting account
btnClose.addEventListener('click', (e) => {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex((acc) => acc.username === currentAccount.username)

    console.log(index);

    //Delete account
    accounts.splice((index, 1));

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = ''
})


let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault()
  displayMovement(currentAccount.movements, !sorted)
  sorted = !sorted;
})

