
let buttonElement = document.getElementById('button');
let birthdayElement = document.getElementById('birthday');
let displayAge = document.getElementById('result');

/* let currentDate = new Date();
inputBirthday = currentDate.getFullYear(); */

let calculateAge = () => {
    const birthdayValue = birthdayElement.value;
    console.log(birthdayValue);

    if (birthdayValue === "") {
        alert('Please enter your birthday')
    }
    else {
        const age = getAge(birthdayValue);
        displayAge.textContent = `Your age is ${age} ${age > 1 ? "years" : "year"} old`
    }
}

let getAge = (birthdayValue) => {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue); 
    console.log(birthdayDate);
  
    const age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || month === 0 && currentDate.getDate() < birthdayDate.getDate()){
        age--;
    }
    return age;
}

buttonElement.addEventListener('click', calculateAge)
