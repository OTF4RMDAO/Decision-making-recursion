/**
 * Recursive function to calculate the nth Fibonacci number.
 * @param {number} n - The position of the Fibonacci number to find.
 * @returns {number} - The nth Fibonacci number.
 */
export function fibonacci(n) {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  