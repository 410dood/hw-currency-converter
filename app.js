// set endpoint and your access key
endpoint = 'latest'
access_key = '5ec89659d8dfa528ae4dfcd369166b33';
let countryCode;

$('input[type=button]').on('click', function() {
    countryCode = $(this).val();

    $.get(`http://data.fixer.io/api/${endpoint}?access_key=${access_key}`, function(json) {

        json.rates[countryCode]

        let dollarInput = $('input[type=text]').val();
        let euroEquivalent = dollarInput / json.rates['USD'];
        let finalAnswer = euroEquivalent * json.rates[countryCode];

        $('#output_amount').append("<p> This equals " + finalAnswer + ' ' + countryCode + "</p>")
    })
});


//         let usdRate = (json.rates.USD)
//             console.log(usdRate)
//         let eurRate = (json.rates.EUR)
//             console.log(eurRate)
//         let gbpRate = (json.rates.GBP)
//             console.log(gbpRate)
//         let cnyRate = (json.rates.CNY)
//             console.log(cnyRate)
//         let jpyRate = (json.rates.JPY)
//             console.log(jpyRate)

//         let dollarToEuro = (eurRate / usdRate)
//             console.log(dollarToEuro)
//         let dollarToGBP = (dollarToEuro * gbpRate)
//             console.log(dollarToGBP)
//         let dollarToCNY = (dollarToEuro * cnyRate)
//             console.log(dollarToCNY)
//         let dollarToJPY = (dollarToEuro * jpyRate)
//             console.log(dollarToJPY)
            
//         let outputValue = 0;
//         function convertCurrency(event) {
//             if ('type' in event.target && event.target.value === 'EUR') {
//                 outputValue = inputValue.value * dollarToEuro;
//             }
//             if ('type' in event.target && event.target.value === 'GBP') {
//                 outputValue = inputValue.value * dollarToGBP;
//             }
//             if ('type' in event.target && event.target.value === 'CNY') {
//                 outputValue = inputValue.value * dollarToCNY;
//             }
//             if ('type' in event.target && event.target.value === 'JPY') {
//                 outputValue = inputValue.value * dollarToJPY;
//             }
//             document.getElementById('output_amount').innerHTML = outputValue;
//         //    document.getElementById('output_currency').innerHTML = type;
//         }
//         document.body.addEventListener('click', convertCurrency);
//     }
// );
