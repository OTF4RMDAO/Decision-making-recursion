/**
 * Function to check if a year is a leap year.
 * A leap year is divisible by 4 but not 100 unless also divisible by 400.
 * @param {number} year - The year to check.
 * @returns {boolean} - True if leap year, false otherwise.
 */
export function checkLeapYear(year) {
    // If the year is divisible by 4, and not divisible by 100 unless divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  