let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let euroElement = document.querySelector(".js-euro");
let dolarElement = document.querySelector(".js-dolar");
let funtElement = document.querySelector(".js-funt");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

let currencyRate;
let currencyName;

switch(true) {
    case euroElement.checked:
        currencyRate = 4.68;
        currencyName = 'euro';
        break;
    case dolarElement.checked:
        currencyRate = 4.32;
        currencyName = 'dolara';
        break;
    default:
        currencyRate = 5.32;
        currencyName = 'funta';
}

result = amountElement.value / currencyRate;

resultElement.innerText = result.toFixed(2);
currencyElement.innerText = `Kurs ${currencyName} wynosi ${currencyRate}.`;

})