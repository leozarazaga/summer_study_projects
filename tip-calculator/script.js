const billElement = document.getElementById('bill');
const tipElement = document.getElementById('tip');
const calculateButton = document.getElementById('calculate');
const displayTotal = document.getElementById('total');

let calculateTip = () => {
    let billValue = parseFloat(billElement.value);
    let tipValue = parseFloat(tipElement.value);
    let totalValue = billValue + (billValue * (tipValue / 100));

    displayTotal.textContent = totalValue.toFixed(2)

}

calculateButton.addEventListener('click', calculateTip)