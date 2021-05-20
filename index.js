function currencyConverter(dolz){
    var errorMessage = dolz + ' is not a valid amount';
    

    if (typeof(dolz) !== 'number' && typeof(dolz) !== 'string'){
        console.log(errorMessage);
        return errorMessage;
    } else {
        var result = (parseFloat(dolz) * 410.83) + ' naira';
        if (result === 'NaN naira'){
            console.log(errorMessage);
            return errorMessage;
        } else {
            console.log(result);
            return result;
        }
    }
}