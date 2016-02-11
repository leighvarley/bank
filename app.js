$(document).ready(function(){
  $(".error").hide()

  function makeTransaction(){

    var balanceDiv = $(this).siblings("div.balance");
    var balanceText = balanceDiv.text();
    var startingBalance = parseInt(balanceText.replace("$", ""));
    var userInput = parseInt($(this).siblings("input.userInput").val());

    if($(this).hasClass("deposit")){
      balanceDiv.html(function(){
          var total = startingBalance + (userInput || 0);
          return "<h2>$" + total + "</h2>";
      });
    }
    else {
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

  $("[type=button]").on("click", makeTransaction);

}());
