// Generated by CoffeeScript 1.10.0
(function() {
  $(function() {
    var bank;
    console.log("DOM is ready");
    return bank = {
      makeTransaction: function() {
        var balanceDiv, startingBalance, userInput;
        balanceDiv = $(this).siblings("div.balance");
        startingBalance = parseFloat(balanceDiv.text().replace("$", ""));
        return userInput = parseFloat($(this).siblings("input.userInput").val());
      }
    };
  });

}).call(this);
