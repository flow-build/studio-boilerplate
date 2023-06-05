import { MaskFunction } from 'utils/masks/types';

const CELLPHONE_LENGTH = 11;

export const maskPhoneNumber: MaskFunction = (value: string): string => {
  if (value === '') {
    return '';
  }

  value = value.replace(/\D/g, '');

  const isCellPhone = value.length >= CELLPHONE_LENGTH;
  const phoneRegex = isCellPhone ? /(\d{5})(\d)/ : /(\d{4})(\d)/;

  return value
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(phoneRegex, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};
