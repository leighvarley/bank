$(document).ready(function(){

  function makeTransaction(){

    var balanceDiv = $(this).siblings("div.balance");
    var balanceText = balanceDiv.text();
    var startingBalance = parseInt(balanceText.replace("$", ""));
    var userInput = parseInt($(this).siblings("input.userInput").val());
    var errorDiv = $(this).siblings("div.error");

    if($(this).hasClass("deposit")){
      var total = startingBalance + (userInput || 0);
    } else {
      if(startingBalance >= userInput){
        var total = startingBalance - (userInput || 0);
      } else if(startingBalance < userInput) {
        total = startingBalance;
        }
        else {
          total = startingBalance;
        }
    }

    if( ($(this).hasClass("withdrawal")) && (userInput > startingBalance) ) {
      errorDiv.html("<p>Insufficient Funds</p>");
      console.log("error");
    }
    else {
      errorDiv.html("");
      console.log("ok");
    }

    balanceDiv.html(function(){
      return "<h2>$" + total + "</h2>";
    });

    $(this).siblings("input.userInput").val("");

  }

  $("[type=button]").on("click", makeTransaction);

}());
