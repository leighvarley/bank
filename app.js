$(document).ready(function(){
  $(".error").hide()

  //DEPOSIT FUNCTION
  function makeDeposit(){
    var balanceDiv = $(this).siblings("div.balance");
    var balanceText = balanceDiv.text();
    var balance = parseInt(balanceText.replace("$", ""));
    var userInput = parseInt($(this).siblings("input.userInput").val());
    $(balanceDiv).html( function(){
        var total = balance + (userInput || 0);
        return "<h2>$" + total + "</h2>";
    });
    $(this).siblings("input.userInput").val("");
  }

  //WITHDRAWAL FUNCTION
  function makeWithdrawal() {
    var balanceDiv = $(this).siblings("div.balance");
    var balanceText = balanceDiv.text();
    var balance = parseInt(balanceText.replace("$", ""));
    var userInput = parseInt($(this).siblings("input.userInput").val());
    if(balance >= userInput){
      $(balanceDiv).html( function(){
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
    $(this).siblings("input.userInput").val("");
  }

  //EVENT LISTENERS
  $("#ckDepositButton").on("click", makeDeposit);
  $("#svDepositButton").on("click", makeDeposit);
  $("#ckWithdrawalButton").on("click", makeWithdrawal);
  $("#svWithdrawalButton").on("click", makeWithdrawal);

}());
