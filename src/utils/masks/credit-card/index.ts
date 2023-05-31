export const maskCreditCardNumber = (value: string) => {
  return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
};
