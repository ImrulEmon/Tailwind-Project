function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    inputText = inputField.value;
    input = parseFloat(inputText);
    inputField.value='';
    return input;
}


function updateTotal(totalId,input) {
    const previousAmountField = document.getElementById(totalId);
    const previousAmountText = previousAmountField.innerText;
    const previousAmount = parseFloat(previousAmountText);
    if(input > 0){
        previousAmountField.innerText = previousAmount + input;
    }
  
}

function getPreviousBalance(){
    const previousBalanceField = document.getElementById("balance-total");
    const previousBalanceText = previousBalanceField.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    return previousBalance;
}

function updateBalance(input) {
    const previousBalanceField = document.getElementById("balance-total");
    const previousBalance = getPreviousBalance();
    previousBalanceField.innerText = previousBalance + input;
}

document.getElementById("deposit-button").addEventListener('click',function() {
    const depositAmount = getInput("deposit-input");
    if(depositAmount > 0 ){
        updateTotal("deposit-total",depositAmount);
        updateBalance(depositAmount);
    }
    else{
        alert("Wrong Input");
    }
    
    
});
document.getElementById("withdraw-button").addEventListener('click',function() {
    const withdrawAmount = getInput("withdraw-input");
    const balance = getPreviousBalance();
    if(withdrawAmount > 0 && balance >= withdrawAmount){
        updateTotal("withdraw-total",withdrawAmount);
        updateBalance(-withdrawAmount);
    }
    else{
        alert("Wrong Input / Insufficient Balance");
    }
});