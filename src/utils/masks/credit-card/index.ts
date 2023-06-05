import { MaskFunction } from 'utils/masks/types';

export const maskCreditCardNumber: MaskFunction = (value: string) => {
  return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
};
