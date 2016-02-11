$(document).ready(function(){
  $(".error").hide()

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
        $(this).siblings("div.error").show();
          setTimeout(function() {
          $(".error").hide();
          }, 1000);
        }
        else {
          total = startingBalance;
        }
    }

    balanceDiv.html(function(){
      return "<h2>$" + total + "</h2>";
    });

    $(this).siblings("input.userInput").val("");

  }

  $("[type=button]").on("click", makeTransaction);

}());
