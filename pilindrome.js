/**
 * Recursive function to check if a string is a palindrome.
 * Ignores spaces, punctuation, and capitalization.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Base case: If the string has one or zero characters, it's a palindrome
    if (str.length <= 1) {
      return true;
    }
  
    // Recursive case: Check if the first and last characters match
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, str.length - 1)); // Check the substring without first and last characters
    } else {
      return false;
    }
  }
  