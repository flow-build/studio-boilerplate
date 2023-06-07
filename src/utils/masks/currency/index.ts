import { MaskFunction } from 'utils/masks/types';

export const maskCurrency: MaskFunction = (value: string) => {
  if (value === '') {
    return 'R$ 0,00';
  }

  value = value.replace(/\D/g, '');

  // Separate reais and cents
  let reais = parseInt(value.substring(0, value.length - 2)).toString();
  let cents = parseInt(value.substring(value.length - 2)).toString();

  if (reais === '' || isNaN(Number(reais))) {
    reais = '0';
  }

  // Add thousands separator
  if (reais.length > 3) {
    reais = reais.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  if (cents === '' || isNaN(Number(cents))) {
    cents = '0';
  }

  // Adds leading zeros to cents if necessary
  if (cents.length < 2) {
    cents = ('0' + cents).slice(-2);
  }

  return 'R$ ' + reais + ',' + cents;
};
