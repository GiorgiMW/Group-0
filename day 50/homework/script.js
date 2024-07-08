function deposit() {
  var amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }
  var balance = parseFloat(document.getElementById("balance").innerText);
  var newBalance = balance + amount;
  document.getElementById("balance").innerText = newBalance;
}

function withdraw() {
  var amount = parseFloat(document.getElementById("amount").value);
  var balance = parseFloat(document.getElementById("balance").innerText);
  if (amount > balance) {
    alert(
      "Insufficient funds. You cannot withdraw more than your current balance."
    );
    return;
  }
  var newBalance = balance - amount;
  document.getElementById("balance").innerText = newBalance;    
}