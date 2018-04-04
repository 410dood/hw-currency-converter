
endpoint = 'latest';
access_key = '5ec89659d8dfa528ae4dfcd369166b33';

$.get('http://data.fixer.io/api/latest?access_key=5ec89659d8dfa528ae4dfcd369166b33', function(json) {

        let usdRate = (json.rates.USD)
            console.log(usdRate)
        let eurRate = (json.rates.EUR)
            console.log(eurRate)
        let gbpRate = (json.rates.GBP)
            console.log(gbpRate)
        let cnyRate = (json.rates.CNY)
            console.log(cnyRate)
        let jpyRate = (json.rates.JPY)
            console.log(jpyRate)

        let dollarToEuro = (eurRate / usdRate)
            console.log(dollarToEuro)
        let dollarToGBP = (dollarToEuro * gbpRate)
            console.log(dollarToGBP)
        let dollarToCNY = (dollarToEuro * cnyRate)
            console.log(dollarToCNY)
        let dollarToJPY = (dollarToEuro * jpyRate)
            console.log(dollarToJPY)  

        let outputValue = 0;
        function convertCurrency(event) {
            if ('type' in event.target && event.target.value === 'EUR') {
                outputValue = inputValue.value * dollarToEuro;
            }
            if ('type' in event.target && event.target.value === 'GBP') {
                outputValue = inputValue.value * dollarToGBP;
            }
            if ('type' in event.target && event.target.value === 'CNY') {
                outputValue = inputValue.value * dollarToCNY;
            }
            if ('type' in event.target && event.target.value === 'JPY') {
                outputValue = inputValue.value * dollarToJPY;
            }
            document.getElementById('output_amount').innerHTML = outputValue;
        }
        document.body.addEventListener('click', convertCurrency)
    }
);
