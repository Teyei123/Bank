alert("Welcome to BlockFuse Labs Bank. Your investment is safe and will grow!");

let userName = prompt("Please enter your name:");
let userEmail = prompt("Please enter your email:");
let userAccount = prompt("Type of account - savings or current");
let userAge = prompt("Please enter your age:");


if (userName) {
  alert("Hello, welcome " + userName + "!");
} else {
  alert("Please provide all details to proceed.");
}

// let balance = 10000; 
// const balanceElement = document.getElementById('balance');  
// const transactionList = document.getElementById('transactionList'); 


// function updateBalance() {
//   balanceElement.textContent = balance.toFixed(2); 
// }

// function logTransaction(message) {
//   const li = document.createElement('li'); 
//   li.textContent = message;  
//   transactionList.appendChild(li); 
// }


// function sendMoney() {
//   const sendAmount = parseFloat(document.getElementById('sendAmount').value); 
  
//   if (sendAmount && sendAmount > 0 && sendAmount <= balance) {
//     balance -= sendAmount;
//     updateBalance();  
//     logTransaction(`Sent $${sendAmount}`); 
//   } else {
//     alert('Invalid amount or insufficient balance.'); 
//   }

//   document.getElementById('sendAmount').value = '';  
// }


// function receiveMoney() {
//   const receiveAmount = parseFloat(document.getElementById('receiveAmount').value); 

//   if (receiveAmount && receiveAmount > 0) {
//     balance += receiveAmount; 
//     updateBalance(); 
//     logTransaction(`Received $${receiveAmount}`); 
//   } else {
//     alert('Invalid amount.'); 
//   }

//   document.getElementById('receiveAmount').value = ''; 
// }


// function applyLoan() {
//   const loanAmount = parseFloat(document.getElementById('loanAmount').value); 

//   if (loanAmount && loanAmount > 0) {
//     balance += loanAmount;
//     updateBalance();  
//     logTransaction(`Loan of $${loanAmount} approved`); 
//   } else {
//     alert('Invalid loan amount.');  
//   }

//   document.getElementById('loanAmount').value = ''; 
// }
