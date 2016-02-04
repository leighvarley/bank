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

  //Subtract withdrawal and display updated balance in the container.
  var checkingWithdrawal = function(){
    checkingBalance -= userCheckingInput();
    ckBalanceContainer.innerHTML = "$" + checkingBalance;
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

  //Subtract withdrawal and display updated balance in the container.
  var savingsWithdrawal = function(){
    savingsBalance -= userSavingsInput();
    svBalanceContainer.innerHTML = "$" + savingsBalance;
  }

  //Call function when respective button is clicked.
  document.getElementById("ckDepositButton").addEventListener("click", checkingDeposit);
  document.getElementById("ckWithdrawalButton").addEventListener("click", checkingWithdrawal);
  document.getElementById("svDepositButton").addEventListener("click", savingsDeposit);
  document.getElementById("svWithdrawalButton").addEventListener("click", savingsWithdrawal);
}());
