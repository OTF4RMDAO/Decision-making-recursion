// Importing all the task modules
import { checkLeapYear } from './leapYear.js';
import { getTicketPrice } from './ticketPricing.js';
import { clothingAdviser } from './weatherAdvisor.js';
import { fibonacci } from './fibonacci.js';
import { isPalindrome } from './palindrome.js';
import { power } from './power.js';

// Function to handle Leap Year checking
document.getElementById("checkLeapYearButton").addEventListener("click", function() {
  // Get year input
  const year = document.getElementById("year").value;

  // Validate input
  if (year === "") {
    document.getElementById("leapResult").textContent = "Please enter a year.";
    return;
  }

  // Call checkLeapYear function and display result
  const result = checkLeapYear(year);
  document.getElementById("leapResult").textContent = result
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;
});

// Function to handle Ticket Pricing calculation
document.getElementById("getTicketPriceButton").addEventListener("click", function() {
  // Get age input
  const age = document.getElementById("age").value;

  // Validate input
  if (age === "") {
    document.getElementById("ticketPriceResult").textContent = "Please enter your age.";
    return;
  }

  // Call getTicketPrice function and display result
  const result = getTicketPrice(age);
  document.getElementById("ticketPriceResult").textContent = `Ticket Price: $${result}`;
});

// Function to handle Weather Clothing advice
document.getElementById("getClothingAdviceButton").addEventListener("click", function() {
  // Get temperature and rain input
  const temperature = document.getElementById("temperature").value;
  const rain = document.getElementById("rain").value;

  // Validate input
  if (temperature === "") {
    document.getElementById("clothingAdviceResult").textContent = "Please enter the temperature.";
    return;
  }

  // Call clothingAdviser function and display result
  const result = clothingAdviser(temperature, rain);
  document.getElementById("clothingAdviceResult").textContent = result;
});

// Function to handle Fibonacci Sequence calculation
document.getElementById("getFibonacciButton").addEventListener("click", function() {
  // Get number input for Fibonacci sequence
  const n = document.getElementById("fibonacciInput").value;

  // Validate input
  if (n === "") {
    document.getElementById("fibonacciResult").textContent = "Please enter a number.";
    return;
  }

  // Call fibonacci function and display result
  const result = fibonacci(n);
  document.getElementById("fibonacciResult").textContent = `Fibonacci number at position ${n}: ${result}`;
});

// Function to handle Palindrome checking
document.getElementById("checkPalindromeButton").addEventListener("click", function() {
  // Get string input for palindrome check
  const str = document.getElementById("palindromeInput").value;

  // Validate input
  if (str === "") {
    document.getElementById("palindromeResult").textContent = "Please enter a string.";
    return;
  }

  // Call isPalindrome function and display result
  const result = isPalindrome(str);
  document.getElementById("palindromeResult").textContent = result
    ? `"${str}" is a palindrome.`
    : `"${str}" is not a palindrome.`;
});

// Function to handle Power calculation
document.getElementById("calculatePowerButton").addEventListener("click", function() {
  // Get base and exponent input
  const base = document.getElementById("baseInput").value;
  const exponent = document.getElementById("exponentInput").value;

  // Validate input
  if (base === "" || exponent === "") {
    document.getElementById("powerResult").textContent = "Please enter both base and exponent.";
    return;
  }

  // Call power function and display result
  const result = power(base, exponent);
  document.getElementById("powerResult").textContent = `${base} raised to the power of ${exponent} is: ${result}`;
});


// In app.js
document.getElementById("checkLeapYearButton").addEventListener("click", checkLeapYearFromInput);
document.getElementById("getTicketPriceButton").addEventListener("click", getTicketPriceFromInput);
