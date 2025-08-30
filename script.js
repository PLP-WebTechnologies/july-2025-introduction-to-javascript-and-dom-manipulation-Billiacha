// 🚀 Assignment: JavaScript Fundamentals
// Author: Your Name
// Each section below corresponds to the assignment parts

// -----------------------------------------
// 🎯 Part 1: JavaScript Basics
// -----------------------------------------
let userName = "Collins"; // variable
let userAge = 20;         // variable
let isStudent = true;     // boolean

// Simple conditional
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// -----------------------------------------
// ❤️ Part 2: Functions
// -----------------------------------------
// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// Function 2: Format a welcome message
function greetUser(name) {
  return "Hello, " + name + "! Welcome to JavaScript practice 🚀";
}

// Example usage
console.log(calculateTotal(100, 0.16)); // 116
console.log(greetUser(userName));

// -----------------------------------------
// 🔁 Part 3: Loops
// -----------------------------------------
// For loop: print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

// While loop: countdown from 5
let count = 5;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// -----------------------------------------
// 🌐 Part 4: DOM Manipulation
// -----------------------------------------
const startBtn = document.getElementById("startBtn");
const resultsDiv = document.getElementById("results");

// 1. Listen to a click event
startBtn.addEventListener("click", function () {
  resultsDiv.innerHTML = ""; // clear previous results

  // 2. Change text content
  document.getElementById("welcome").textContent = "Assignment Running... ✅";

  // 3. Dynamically create elements
  let msg = document.createElement("p");
  msg.textContent = greetUser(userName);
  resultsDiv.appendChild(msg);

  // Display loop results inside the page
  let list = document.createElement("ul");
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number: " + i;
    list.appendChild(li);
  }
  resultsDiv.appendChild(list);

  // Show a calculated result
  let total = document.createElement("p");
  total.textContent = "Total after tax: " + calculateTotal(100, 0.16);
  resultsDiv.appendChild(total);
});
