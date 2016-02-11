$(document).ready(function(){
  $(".error").hide()

  function makeTransaction() {
    console.log($(this));
    console.log(this);
    var balanceDiv = $(this).siblings("div.balance");
    console.log(balanceDiv);
    var balanceText = balanceDiv.text();
    console.log(balanceText);
    var startingBalance = parseInt(balanceText.replace("$", ""));
    console.log("starting balance: " + startingBalance);
    var userInput = parseInt($(this).siblings("input.userInput").val());
    console.log("user input: " + userInput);
    if($(this).hasClass("deposit")){
      console.log("deposit button");
      balanceDiv.html(function(){
          var total = startingBalance + (userInput || 0);
          return "<h2>$" + total + "</h2>";
      });
    }
    else {
      console.log("withdrawal button");
      if(startingBalance >= userInput){
          balanceDiv.html(function(){
              var total = startingBalance - (userInput || 0);
              return "<h2>$" + total + "</h2>";
          });
      }
      else if(startingBalance < userInput) {
        $(this).siblings("div.error").show();
        setTimeout(function() {
        $(".error").hide();
        }, 1000);
      }
      else {
        return "<h2>$" + startingBalance + "</h2>"
      }
    }

  $(this).siblings("input.userInput").val("");

  }

  $("#ckDepositButton").on("click", makeTransaction);
  $("#svDepositButton").on("click", makeTransaction);
  $("#ckWithdrawalButton").on("click", makeTransaction);
  $("#svWithdrawalButton").on("click", makeTransaction);

}());
