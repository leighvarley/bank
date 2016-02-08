$(document).ready(function(){
  $(".error").hide()

  //DEPOSIT FUNCTION
  function makeDeposit(){
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

  //WITHDRAWAL FUNCTION
  function makeWithdrawal() {
    var currentBalance = $(this).siblings("div.balance");
    console.log(currentBalance);
    var currentBalanceText = currentBalance.text();
    var balance = parseInt(currentBalanceText.replace("$", ""));
    var userInput = parseInt($(this).siblings("input.userInputAmount").val());
    if(balance >= userInput){
      $(currentBalance).html( function(){
          var total = balance - (userInput || 0);
          return "<h2>$" + total + "</h2>";
      });
    }
    else if(balance < userInput) {
      $(this).siblings("div.error").show();
      setTimeout(function() {
      $(".error").hide();
      }, 1000);
    }
    else {
      return "<h2>$" + balance + "</h2>"
    }
    $(this).siblings("input.userInputAmount").val("");
  }

  //EVENT LISTENERS
  $("#ckDepositButton").on("click", makeDeposit);
  $("#svDepositButton").on("click", makeDeposit);
  $("#ckWithdrawalButton").on("click", makeWithdrawal);
  $("#svWithdrawalButton").on("click", makeWithdrawal);

}());
