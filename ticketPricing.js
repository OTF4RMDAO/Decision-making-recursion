/**
 * Function to determine ticket price based on age.
 * @param {number} age - The age of the user.
 * @returns {string} - The price of the movie ticket.
 */
export function getTicketPrice(age) {
    // Determine ticket price based on the user's age
    if (age <= 12) {
      return "$10 (Children)";
    } else if (age >= 13 && age <= 17) {
      return "$15 (Teenagers)";
    } else if (age >= 18) {
      return "$20 (Adults)";
    } else {
      return "Invalid age.";
    }
  }
  