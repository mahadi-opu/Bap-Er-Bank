

// handle deposit Button  event
document.getElementById('deposit-button').addEventListener
    ('click', function () {
        //get input the ammount deposited
        const depositInput = document.getElementById('deposit-input')
            ;
        const newDdepositText = depositInput.value;
        const newDdepositAmount = parseFloat(newDdepositText);



        //Show  the ammount deposited
        const depositTotal = document.getElementById('deposit-total')
            ;
        const previousDepositText = depositTotal.innerText;
        const previousDepositAmount = parseFloat(previousDepositText);
        // Deposit Calculation 
        const newDdepositTotal = previousDepositAmount + newDdepositAmount;
        depositTotal.innerText = newDdepositTotal;


        //update Account Blance 
        const balanceTotal = document.getElementById('blance-total')
            ;
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        // blance Calculation 
        const newBalanceTotal = previousBalanceTotal + newDdepositAmount;
        balanceTotal.innerText = newBalanceTotal;

        //clear the deposit input field 
        depositInput.value = '';
    })


// handle withdraw Button event
document.getElementById('withdraw-button').addEventListener
    ('click', function () {
        //get input the ammount deposited
        const withdrawInput = document.getElementById('withdraw-input')
            ;
        const newwithdrawText = withdrawInput.value;
        const newwithdrawAmount = parseFloat(newwithdrawText);


        //Show  the ammount deposited
        const withdrawTotalShow = document.getElementById('withdraw-total-show')
            ;
        const previouswithdrawText = withdrawTotalShow.innerText;
        const previouswithdrawAmount = parseFloat(previouswithdrawText);
        // Deposit Calculation 
        const newWithdrawTotal = previouswithdrawAmount + newwithdrawAmount;
        withdrawTotalShow.innerText = newWithdrawTotal;


        //update Withdraw Blance 
        const balanceTotal = document.getElementById('blance-total')
            ;
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        // blance Calculation 
        const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;
        balanceTotal.innerText = newBalanceTotal;

        //clear the deposit input field 
        withdrawInput.value = '';
    })