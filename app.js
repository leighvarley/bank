(function(){
  $(".error").hide()
  var checkingBalance = 0;
  var savingsBalance = 0;
  var ckBalanceContainer = document.getElementById("ckBalanceContainer");
  var svBalanceContainer = document.getElementById("svBalanceContainer");
  var checkingAmount = document.getElementById("ckInput");
  var savingsAmount = document.getElementById("svInput");

//CHECKING ACCOUNT

  // Save user input.
  var userCheckingInput = function() {
    var ckAmount = parseInt((checkingAmount).value);
    document.getElementById("ckInput").value="";
      return ckAmount || 0;
  }

  //Add deposit and display updated balance in the container.
  var checkingDeposit = function(){
    checkingBalance += userCheckingInput();
    ckBalanceContainer.innerHTML = "<h2>" + '$' + checkingBalance + "</h2>";
  }

  //Subtract withdrawal if there are sufficient funds.
  var checkingWithdrawal = function(){
    var ckAmount = parseInt((checkingAmount).value);
    document.getElementById("ckInput").value="";
    if(checkingBalance >= ckAmount){
        checkingBalance -= ckAmount;
        ckBalanceContainer.innerHTML = "<h2>" + '$' + checkingBalance + "</h2>";
    }
    else {
      $("#ckError").show();
      setTimeout(function() {
        $("#ckError").hide();
      }, 1000);
    }
  }

//SAVINGS ACCOUNT

  //Save user input.
  var userSavingsInput = function(){
    var svAmount = parseInt((savingsAmount).value);
    document.getElementById("svInput").value = "";
    return svAmount || 0;
  }

  //Add deposit and display updated balance in the container.
  var savingsDeposit = function(){
    savingsBalance += userSavingsInput();
    svBalanceContainer.innerHTML = "<h2>" + '$' + savingsBalance + "</h2>";
  }

  //Subtract withdrawal if there are sufficient funds.
  var savingsWithdrawal = function(){
    var svAmount = parseInt((savingsAmount).value);
    document.getElementById("svInput").value = "";
    if(savingsBalance >= svAmount){
      savingsBalance -= svAmount;
      svBalanceContainer.innerHTML = "<h2>" + '$' + savingsBalance + "</h2>";
    }
    else {
      $("#svError").show();
      setTimeout(function() {
        $("#svError").hide();
      }, 1000);
    }
  }

  //Call function when respective button is clicked.
  document.getElementById("ckDepositButton").addEventListener("click", checkingDeposit);
  document.getElementById("ckWithdrawalButton").addEventListener("click", checkingWithdrawal);
  document.getElementById("svDepositButton").addEventListener("click", savingsDeposit);
  document.getElementById("svWithdrawalButton").addEventListener("click", savingsWithdrawal);
}());
