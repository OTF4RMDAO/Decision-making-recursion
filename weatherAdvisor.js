/**
 * Function to advise clothing based on temperature and whether it's raining.
 * @param {number} temperature - The current temperature.
 * @param {boolean} isRaining - Whether it is raining or not.
 * @returns {string} - Advice on what clothing to wear.
 */
export function clothingAdviser(temperature, isRaining) {
    // Provide clothing advice based on weather conditions
    if (isRaining) {
      return "Wear a raincoat and carry an umbrella.";
    } else if (temperature < 10) {
      return "Wear a warm jacket.";
    } else if (temperature >= 10 && temperature <= 20) {
      return "Wear a sweater or light jacket.";
    } else {
      return "Wear light clothes, it's warm!";
    }
  }
  