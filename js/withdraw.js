    //step-1
    document.getElementById('Withdraw-btn').addEventListener('click', function () {
        //step-2
        const withdrawField = document.getElementById('Withdraw');
        const newWithdrawAmountString = withdrawField.value;
        const newWithdrawAmount = parseFloat(newWithdrawAmountString);
        //step-3
        const WithdrawTotalElement = document.getElementById('total-Withdraw');
        const previousWithdrawString = WithdrawTotalElement.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawString);

        //step-4
        const currentWithdeawTotal = previousWithdrawTotal +  newWithdrawAmount ;
        WithdrawTotalElement.innerText = currentWithdeawTotal;      
        //step-5
        const blanceTotalElement = document.getElementById('total-Blance');
        const previousBlanceTotalString =blanceTotalElement.innerText;
        const previousBlanceTotal = parseFloat(previousBlanceTotalString);
        
        //step-6
        const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;
        blanceTotalElement.innerText = newBlanceTotal;





        withdrawField.value = '';

    })