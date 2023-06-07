import { MaskFunction } from 'utils/masks/types';

export const maskCPF: MaskFunction = (value: string): string => {
  if (value === '') {
    return value;
  }

  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};
