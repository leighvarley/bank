$(document).ready(function(){

  var bank = {
    makeTransaction: function(){
      //Set up variables.
      var balanceDiv = $(this).siblings("div.balance");
      var balanceText = balanceDiv.text();
      var startingBalance = parseInt(balanceText.replace("$", ""));
      var userInput = parseInt($(this).siblings("input.userInput").val());
      var errorDiv = $(this).siblings("div.error");
      //Update the total.
      if ($(this).hasClass("deposit")) {
        var total = startingBalance + (userInput || 0);
      } else {
        if (startingBalance >= userInput) {
          var total = startingBalance - (userInput || 0);
        } else {
            total = startingBalance;
          }
      }
      //Show the total on the page.
      balanceDiv.html("<h2>$" + total + "</h2>");
      //Show an error message if the requested withdrawal exceeds the balance.
      if (($(this).hasClass("withdrawal")) && (userInput > startingBalance)) {
        errorDiv.html("<p>Insufficient Funds!</p>");
      } else {
        errorDiv.html("");
      }
      //Clear the user input field.
      $(this).siblings("input.userInput").val("");
    },
    // Call the function when a button is clicked.
    listenForClick: function() {
      $("[type=button]").on("click", bank.makeTransaction)
    }
  }

  bank.listenForClick();

}());
