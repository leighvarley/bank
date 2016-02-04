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


//Checking Withdrawl

var checkingWithdrawal = function(){
  checkingBalance -= userCheckingInput();
  var ckBalanceContainer = document.getElementById("ckBalanceContainer");
  ckBalanceContainer.innerHTML = "$" + checkingBalance;
}

document.getElementById("ckWithdrawalButton").addEventListener("click", checkingWithdrawal);
