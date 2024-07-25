document.querySelector('#converter-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const amount = document.querySelector('#amount').value;
    const fromCurrency = document.querySelector('#fromCurrency').value;
    const toCurrency = document.querySelector('#toCurrency').value;
    const resultDiv = document.querySelector('#result');

    // Replace 'YOUR_API_KEY' with your actual API key from ExchangeRate-API
    const apiKey = '03eabb0f9bcce362a2bea93c';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    axios.get(url)
        .then(response => {
            const rate = response.data.conversion_rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            resultDiv.innerHTML = `<h4>${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}</h4>`;
        })
        .catch(error => {
            console.error('Error fetching the exchange rate:', error);
            resultDiv.innerHTML = '<h4 class="text-danger">Error fetching the exchange rate. Please try again later.</h4>';
        });
});
