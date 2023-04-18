{
    const calculate = (event) => {
        event.preventDefault();

        const euroElement = document.querySelector(".js-euro");
        const dolarElement = document.querySelector(".js-dolar");
        const funtElement = document.querySelector(".js-funt");
        const amountElement = document.querySelector(".js-amount");

        let currencyRate;
        let currencyName;

        switch (true) {
            case euroElement.checked:
                currencyRate = 4.68;
                currencyName = 'euro';
                break;
            case dolarElement.checked:
                currencyRate = 4.32;
                currencyName = 'dolara';
                break;
            case funtElement.checked:
                currencyRate = 5.32;
                currencyName = 'funta';
                break;
        }

        const result = amountElement.value / currencyRate;

        resultText(result, currencyName, currencyRate);
    }

    const resultText = (result, currencyName, currencyRate) => {
        const resultElement = document.querySelector(".js-result");
        const currencyElement = document.querySelector(".js-currency");

        resultElement.innerText = result.toFixed(2);
        currencyElement.innerText = `Kurs ${currencyName} wynosi ${currencyRate}.`;
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", calculate);
    }

    init();
}