
let calculateAgeButton = document.getElementById('button');
let inputBirthday = document.getElementById('birthday').value;

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

console.log(currentYear);

calculateAgeButton.addEventListener('click', () =>{
    console.log("click");

})
