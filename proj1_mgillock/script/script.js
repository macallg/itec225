const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', event => {
    event.preventDefault();

    const principle = document.querySelector('#Principal').value;
    const interest = document.querySelector('#interestRate').value;
    const period = document.querySelector('#period').value;
    const overallTime = document.querySelector('#overallTime').value;

    const sum = principle * Math.pow(1 + (interest/period),(period*overallTime));

    //I learned this innerHTML function here.  It is very returning values to the HTML file.
    //https://stackoverflow.com/questions/38677001/how-to-return-values-from-external-javascript-function
    result.innerHTML = sum;
});

