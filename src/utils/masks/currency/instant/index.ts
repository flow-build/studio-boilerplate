export const maskCurrencyInstant = (value: number) => {
  if (isNaN(value)) {
    return '';
  }

  const options = { currency: 'BRL', style: 'currency' };
  return new Intl.NumberFormat('pt-BR', options).format(value);
};
