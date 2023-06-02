/* Luhn Validation */
export function validateCreditCard(cardNumber: string): boolean {
  cardNumber = cardNumber.replace(/\D/g, '');
  let sum = 0;
  let isEven = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    const digit = parseInt(cardNumber.charAt(i), 10);

    if (isEven) {
      sum += digit * 2 > 9 ? digit * 2 - 9 : digit * 2;
    } else {
      sum += digit;
    }

    isEven = !isEven;
  }

  return sum % 10 === 0;
}
