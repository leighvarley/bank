$(document).ready(function(){

  var bank = {

    makeTransaction: function(){

      //Set up variables.
      var balanceDiv = $(this).siblings("div.balance");
      var balanceText = balanceDiv.text();
      var startingBalance = parseInt(balanceText.replace("$", ""));
      var userInput = parseInt($(this).siblings("input.userInput").val());
      //Use self to access makeTransaction's "this" keyword from updateThePage.
      var self = $(this);

      //Calculate the total.
      if ($(this).hasClass("deposit")) {
        var total = startingBalance + (userInput || 0);
      } else {
        if (startingBalance >= userInput) {
          var total = startingBalance - (userInput || 0);
        } else {
            total = startingBalance;
          }
      };

      //Display the total, show an error message if necessary, and clear the user input field.
      var updateThePage = function(){
        balanceDiv.html("<h2>$" + total + "</h2>");
        if ((self.hasClass("withdrawal")) && (userInput > startingBalance)) {
          balanceDiv.append("<p>Insufficient Funds!</p>");
        }
        $("input.userInput").val("");
      };

      updateThePage();

    }

  }

  $("[type=button]").on("click", bank.makeTransaction)

}());
