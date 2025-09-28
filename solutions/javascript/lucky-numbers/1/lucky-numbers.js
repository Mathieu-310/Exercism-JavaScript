// @ts-check


// Additionner deux tableaux de chiffres
export function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join(''));
}

// Vérifier si un nombre est "lucky" (palindrome)
export function luckyNumber(value) {
  const cleanValue = value.toString().trim();
  const reversed = cleanValue.split("").reverse().join("");
  return reversed === cleanValue;
}

// Validation d'input
export function errorMessage(input) {
  // Cas 1 : rien fourni
  if (input == null || input.trim() === '') {
    return 'Required field';
  }

  // Tenter la conversion en nombre
  const num = Number(input);

  // Cas 2 : NaN ou 0
  if (!Number.isFinite(num) || num === 0) {
    return 'Must be a number besides 0';
  }

  // Cas 3 : valide
  return '';
}
