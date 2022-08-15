    //step-1
    document.getElementById('deposit-btn').addEventListener('click', function () {


    const depositField = document.getElementById('Deposit');

    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3//
    const depositeTotalElement = document.getElementById('total-deposit');

    const previousDepositTotalString = depositeTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //step-4
    const currentDepositTotal = previousDepositTotal +  newDepositAmount ;

    depositeTotalElement.innerText = currentDepositTotal;
    depositField.value = '';
    //step-5

    const blanceTotalElement = document.getElementById('total-Blance');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const  previousBlanceTotal =  parseFloat(previousBlanceTotalString);

    //step-6
    const currentBlancetTotal = previousBlanceTotal + newDepositAmount;
        blanceTotalElement.innerText = currentBlancetTotal;

  
})