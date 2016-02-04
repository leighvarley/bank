(function(){

  //CHECKING ACCOUNT

  var checkingBalance = 0;

  //Grab user input for the checking account.
  var userCheckingInput = function() {
    var ckAmount = parseInt(document.getElementById("ckInput").value);
    document.getElementById("ckInput").value="";
    return ckAmount;
  }

  //Checking deposit

  //Add new deposit to current balance and display it in the container.
  var checkingDeposit = function(){
    checkingBalance += userCheckingInput();
    var ckBalanceContainer = document.getElementById("ckBalanceContainer");
    ckBalanceContainer.innerHTML = "$" + checkingBalance;
   }

  //Call the checking deposit function when the checking deposit button is clicked.
  document.getElementById("ckDepositButton").addEventListener("click", checkingDeposit);

  //Checking Withdrawal

  var checkingWithdrawal = function(){
    checkingBalance -= userCheckingInput();
    var ckBalanceContainer = document.getElementById("ckBalanceContainer");
    ckBalanceContainer.innerHTML = "$" + checkingBalance;
  }

  //Call the checking withdrawal function when the checking withdrawal button is clicked.
  document.getElementById("ckWithdrawalButton").addEventListener("click", checkingWithdrawal);

  //SAVINGS ACCOUNT

  var savingsBalance = 0;

  //Grab user input for the savings account.
  var userSavingsInput = function(){
    var svAmount = parseInt(document.getElementById("svInput").value);
    document.getElementById("svInput").value = "";
    return svAmount;
  }

  //Add new deposit to balance and save in the container.
  var savingsDeposit = function(){
    savingsBalance += userSavingsInput();
    var svBalanceContainer = document.getElementById("svBalanceContainer");
    svBalanceContainer.innerHTML = "$" + savingsBalance;
  }

  //Call the savings deposit function when the savings deposit button is clicked
  document.getElementById("svDepositButton").addEventListener("click", savingsDeposit);

  //Subtract withdrawal from savings account and save balance in the container
  var savingsWithdrawal = function(){
    savingsBalance -= userSavingsInput();
    var svBalanceContainer = document.getElementById("svBalanceContainer");
    svBalanceContainer.innerHTML = "$" + savingsBalance;
  }

  //Call the savings withdrawal function when the savings withdrawal button is clicked
  document.getElementById("svWithdrawalButton").addEventListener("click", savingsWithdrawal);

}());
