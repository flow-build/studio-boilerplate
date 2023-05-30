const CNPJ_LENGTH = 14;
const CNPJ_MASK_LENGTH = 18;

const calculateValidator = (verifyingDigit: number, numbers: number[]) => {
  const slice = numbers.slice(0, verifyingDigit);
  let factor = verifyingDigit - 7;
  let sum = 0;

  for (let i = verifyingDigit; i >= 1; i--) {
    const n = slice[verifyingDigit - i];
    sum += n * factor--;
    if (factor < 2) factor = 9;
  }

  const result = 11 - (sum % 11);

  return result > 9 ? 0 : result;
};

export function validateCNPJ(cnpj: string | number): boolean {
  if (cnpj === '') {
    return false;
  }

  const isString = typeof cnpj === 'string';
  const validTypes = isString || Number.isInteger(cnpj) || Array.isArray(cnpj);

  if (!validTypes) {
    return false;
  }

  if (isString) {
    const lengthIsValid = cnpj.length >= CNPJ_LENGTH && cnpj.length <= CNPJ_MASK_LENGTH;
    if (!lengthIsValid) {
      return false;
    }

    const digitsOnly = /^\d{14}$/.test(cnpj);
    const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(cnpj);
    const isValid = digitsOnly || validFormat;

    if (!isValid) {
      return false;
    }
  }

  const match = cnpj.toString().match(/\d/g);
  const numbers = Array.isArray(match) ? match.map(Number) : [];

  const lengthIsValid = numbers.length === CNPJ_LENGTH;
  if (!lengthIsValid) {
    return false;
  }

  const uniqueItems = numbers.filter((value, index, array) => array.indexOf(value) === index);
  if (uniqueItems.length === 1) {
    return false;
  }

  // Get the last 2 digits
  const digits = numbers.slice(12);

  // Validate 1st checker digit
  const digit0 = calculateValidator(12, numbers);
  if (digit0 !== digits[0]) {
    return false;
  }

  // Validate 2nd checker digit
  const digit1 = calculateValidator(13, numbers);
  return digit1 === digits[1];
}
