(function(){
  $(".error").hide()
  var checkingBalance = 0;
  var savingsBalance = 0;
  var ckBalanceContainer = document.getElementById("ckBalanceContainer");
  var svBalanceContainer = document.getElementById("svBalanceContainer");
  var checkingAmount = document.getElementById("ckInput");
  var savingsAmount = document.getElementById("svInput");

  //DEPOSIT FUNCTION
  var makeDeposit = function(){
    //Grab the targeted balance div.
    var currentBalance = $(this).siblings("div.balance");
    console.log(currentBalance);
    //Get the current balance from the div and save it as a string.
    var currentBalanceText = currentBalance.text();
    console.log("currentBalanceText: " + currentBalanceText + " type: " + typeof(currentBalanceText));
    //Convert the string to an integer.
    var balance = parseInt(currentBalanceText.replace("$", ""));
    console.log("balance: " + balance + " type: " + typeof(balance));
    //Grab the userInput and save it as an integer.
    var userInput = parseInt($(this).siblings("input.userInputAmount").val());
    console.log("userInput:" + userInput);
    //Calculate the new total and update the html to reflect the added userInput.
    $(currentBalance).html( function(){
        var total = balance + (userInput || 0);
        return "<h2>$" + total + "</h2>";
    });
    //Clear the value of the input field.
    $(this).siblings("input.userInputAmount").val("");
  }

  //Deposit event listeners
  document.getElementById("ckDepositButton").addEventListener("click", makeDeposit);
  document.getElementById("svDepositButton").addEventListener("click", makeDeposit);


  //Checking Withdrawal
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

  //Savings Withdrawal
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

  //withdrawal event listeners
  document.getElementById("ckWithdrawalButton").addEventListener("click", checkingWithdrawal);
  document.getElementById("svWithdrawalButton").addEventListener("click", savingsWithdrawal);
}());
