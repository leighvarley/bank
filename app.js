$(document).ready(function(){

  var bank = {

    makeTransaction: function(){

      //Set up variables.
      var balanceDiv = $(this).siblings("div.balance");
      var startingBalance = parseFloat(balanceDiv.text().replace("$", ""));
      var userInputField = $(this).siblings("input.userInput");
      var userInput = parseFloat(userInputField.val());

      //Calculate the total.
      if(userInput > 0){
        if ($(this).hasClass("deposit")) {
          var total = startingBalance + (userInput || 0);
        } else {
          if (startingBalance >= userInput) {
            var total = startingBalance - (userInput || 0);
          } else {
              total = startingBalance;
            }
        }
      } else {
        total = startingBalance;
      };

      //Display the total, show an error message if necessary, and clear the user input field.
      return updateThePage = function(){
        balanceDiv.html("<h2>$" + total.toFixed(2) + "</h2>");
        if (($(this).hasClass("withdrawal")) && (userInput > startingBalance)) {
          balanceDiv.append("<p>Insufficient Funds!</p>");
        }
        userInputField.val("");
      }.bind(this)();

    }

  }

  $("[type=button]").on("click", bank.makeTransaction)

}());
