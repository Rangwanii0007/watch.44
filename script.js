
let balance = 0;

function watchAd() {
  let reward = (Math.random() * (1.0 - 0.1) + 0.1).toFixed(2);
  balance += parseFloat(reward);
  updateBalance();
  alert(`You watched an ad and earned $${reward}`);
}

function completeTask() {
  if (!localStorage.getItem("taskCompleted")) {
    balance += 3.00;
    updateBalance();
    localStorage.setItem("taskCompleted", "yes");
    alert("You earned $3.00 for completing the task!");
  } else {
    alert("You already completed the task.");
  }
}

function updateBalance() {
  document.getElementById("balance").innerText = `$${balance.toFixed(2)}`;
}
