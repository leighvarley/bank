(function(){
  var checkingBalance = 0;
  var savingsBalance = 0;
  var ckBalanceContainer = document.getElementById("ckBalanceContainer");
  var svBalanceContainer = document.getElementById("svBalanceContainer");
  var checkingAmount = document.getElementById("ckInput");
  var savingsAmount = document.getElementById("svInput");


//CHECKING ACCOUNT

  //Save user input.
  var userCheckingInput = function() {
    var ckAmount = parseInt((checkingAmount).value);
    document.getElementById("ckInput").value="";
    return ckAmount;
  }

  //Add deposit and display updated balance in the container.
  var checkingDeposit = function(){
    checkingBalance += userCheckingInput();
    ckBalanceContainer.innerHTML = "$" + checkingBalance;
   }

  var checkingWithdrawal = function(){
    if(checkingBalance >= userCheckingInput()){
      checkingBalance -= userCheckingInput();
      ckBalanceContainer.innerHTML = "$" + checkingBalance;
    }
    else {
      ckBalanceContainer.innerHTML = "Insufficient Funds! You only have $ " + checkingBalance + " in your account.";
    }
  }

//SAVINGS ACCOUNT

  //Save user input.
  var userSavingsInput = function(){
    var svAmount = parseInt((savingsAmount).value);
    document.getElementById("svInput").value = "";
    return svAmount;
  }

  //Add deposit and display updated balance in the container.
  var savingsDeposit = function(){
    savingsBalance += userSavingsInput();
    svBalanceContainer.innerHTML = "$" + savingsBalance;
  }

  var savingsWithdrawal = function(){
    if(savingsBalance >= userSavingsInput()){
      savingsBalance -= userSavingsInput();
      svBalanceContainer.innerHTML = "$" + savingsBalance;
    }
    else {
      svBalanceContainer.innerHTML = "Insufficient Funds! You only have $ " + savingsBalance + " in your account.";
    }
  }

  //Call function when respective button is clicked.
  document.getElementById("ckDepositButton").addEventListener("click", checkingDeposit);
  document.getElementById("ckWithdrawalButton").addEventListener("click", checkingWithdrawal);
  document.getElementById("svDepositButton").addEventListener("click", savingsDeposit);
  document.getElementById("svWithdrawalButton").addEventListener("click", savingsWithdrawal);
}());
