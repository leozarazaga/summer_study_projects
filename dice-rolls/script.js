const buttonElement = document.querySelector('#roll-button');
const diceElement = document.getElementById('dice');
const rollHistoryElement = document.getElementById('roll-history');
let historyList = []

const rollDice = () => {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult)
    diceElement.innerHTML = diceFace

    historyList.push(rollResult);
    uppdateRollHistory()
}

const uppdateRollHistory = () => {
    rollHistoryElement.innerHTML = '';
    for(let i = 0; i < historyList.length; i++){
        const listItem = document.createElement('li')
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`
        rollHistoryElement.appendChild(listItem)
    }
}


const getDiceFace = (rollResult) => {
    switch (rollResult) {
        case 1:
            return "&#9856;"
            break;

        case 2:
            return "&#9857;"
            break;

        case 3:
            return "&#9858;"
            break;

        case 4:
            return "&#9859;"
            break;

        case 5:
            return "&#9860;"
            break;

        case 6:
            return "&#9861;"
            break;


        default:
            break;
    }
}


buttonElement.addEventListener('click', () => {
    diceElement.classList.add('roll-animation')

    setTimeout(() => {
        diceElement.classList.remove('roll-animation')
        rollDice()
    }, 1000)
})