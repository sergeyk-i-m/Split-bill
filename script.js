const buttonTip = document.querySelector('#addTip');
buttonTip.addEventListener('click', showTip);

function showTip(e) {
    tip.style.display = "block";
    e.preventDefault();
}

const calculate = document.querySelector('#calculate');
calculate.addEventListener('click', calculateAmount);



function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#tip').value;

    if (bill === "" || people === "" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information!',
        })
    }
    let amountPerPerson = bill/people;
    let tipPerPerson = (bill * tip) / people;
    let totalSum = amountPerPerson + tipPerPerson;
    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector('#devidedBill').textContent = amountPerPerson;
    document.querySelector('#devidedTip').textContent = tipPerPerson;
    document.querySelector('#billAndTip').textContent = totalSum;
}