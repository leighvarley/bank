$(document).ready(function(){

  function makeTransaction(){

    var balanceDiv = $(this).siblings("div.balance");
    var balanceText = balanceDiv.text();
    var startingBalance = parseInt(balanceText.replace("$", ""));
    var userInput = parseInt($(this).siblings("input.userInput").val());

    if($(this).hasClass("deposit")){
      var total = startingBalance + (userInput || 0);
    } else {
      if(startingBalance >= userInput){
        var total = startingBalance - (userInput || 0);
      } else if(startingBalance < userInput) {
        total = startingBalance;
        console.log("not enough");
        }
        else {
          total = startingBalance;
        }
    }

    if(total < userInput) {
      $(this).siblings("div.errorContainer").html("<p>Insufficient Funds</p>");
    }
    else {
      $(this).siblings("div.errorContainer").html("");
    }

    balanceDiv.html(function(){
      return "<h2>$" + total + "</h2>";
    });

    $(this).siblings("input.userInput").val("");

  }

  $("[type=button]").on("click", makeTransaction);

}());
