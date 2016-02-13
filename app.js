$(document).ready(function(){

  var bank = {

    makeTransaction: function(){

      //Set up variables.
      var balanceDiv = $(this).siblings("div.balance");
      var balanceText = balanceDiv.text();
      var startingBalance = parseInt(balanceText.replace("$", ""));
      var userInput = parseInt($(this).siblings("input.userInput").val());
      var errorDiv = $(this).siblings("div.error");
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
          errorDiv.html("<p>Insufficient Funds!</p>");
        } else {
          errorDiv.html("");
        };
        $("input.userInput").val("");
      };

      updateThePage();

    },

    // Call makeTransaction when a button is clicked.
    listenForClick: function() {
      $("[type=button]").on("click", bank.makeTransaction)
    }

  }

  bank.listenForClick();

}());
