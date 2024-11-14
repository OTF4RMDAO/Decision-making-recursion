/**
 * Recursive function to calculate the result of raising a number to a given power.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent to raise the base number to.
 * @returns {number} - The result of base raised to the exponent.
 */
export function power(base, exponent) {
    // Base case: If exponent is 0, return 1 (base case for any number raised to power 0)
    if (exponent === 0) return 1;
  
    // Recursive case: Multiply base by the result of base raised to (exponent - 1)
    return base * power(base, exponent - 1);
  }
  