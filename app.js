$(document).ready(function(){
  $(".error").hide()

  //DEPOSIT FUNCTION
  function makeDeposit(){
    var currentBalance = $(this).siblings("div.balance");
    var currentBalanceText = currentBalance.text();
    var balance = parseInt(currentBalanceText.replace("$", ""));
    var userInput = parseInt($(this).siblings("input.userInputAmount").val());
    $(currentBalance).html( function(){
        var total = balance + (userInput || 0);
        return "<h2>$" + total + "</h2>";
    });
    $(this).siblings("input.userInputAmount").val("");
  }

  //WITHDRAWAL FUNCTION
  function makeWithdrawal() {
    var currentBalance = $(this).siblings("div.balance");
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
