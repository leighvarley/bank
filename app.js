(function(){
  var checkingBalance = 0;
  var savingsBalance = 0;
  var ckBalanceContainer = document.getElementById("ckBalanceContainer");
  var svBalanceContainer = document.getElementById("svBalanceContainer");
  var ckErrorContainer = document.getElementById("ckError");
  var svErrorContainer = document.getElementById("svError");
  var checkingAmount = document.getElementById("ckInput");
  var savingsAmount = document.getElementById("svInput");

//CHECKING ACCOUNT

  // Save user input.
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

  //Subtract withdrawal if funds are sufficient and display updated balance in the container.
  var checkingWithdrawal = function(){
    var ckAmount = parseInt((checkingAmount).value);
    if(checkingBalance >= ckAmount){
        checkingBalance -= ckAmount;
        ckBalanceContainer.innerHTML = "$" + checkingBalance;
    }
    else {
      var answer = confirm("Insufficient funds");
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
    var svAmount = parseInt((savingsAmount).value);
    if(savingsBalance >= svAmount){
      savingsBalance -= svAmount;
      svBalanceContainer.innerHTML = "$" + savingsBalance;
    }
    else {
      var answer = confirm("Insufficient funds");
    }
  }

  //Call function when respective button is clicked.
  document.getElementById("ckDepositButton").addEventListener("click", checkingDeposit);
  document.getElementById("ckWithdrawalButton").addEventListener("click", checkingWithdrawal);
  document.getElementById("svDepositButton").addEventListener("click", savingsDeposit);
  document.getElementById("svWithdrawalButton").addEventListener("click", savingsWithdrawal);
}());
