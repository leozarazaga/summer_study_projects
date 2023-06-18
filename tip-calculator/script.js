const billElement = document.getElementById('bill');
const tipElement = document.getElementById('tip');
const calculateButton = document.getElementById('calculate');
const displayTotal = document.getElementById('total');

let calculateTip = () => {
    let billValue = billElement.value;
    let tipValue = tipElement.value;
    let totalValue = billValue * (1 + tipValue / 100);

    displayTotal.textContent = totalValue.toFixed(2)

}

calculateButton.addEventListener('click', calculateTip)