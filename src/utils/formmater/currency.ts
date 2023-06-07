export function parseNumberToMoneyPtBr(value: number): string {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
}

export function getCurrencyIntegerValue(value: number): string {
  const newValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });

  return newValue.split(',')[0];
}

export function getCurrencyDecimalPart(value: number): string {
  if (Number.isInteger(value)) {
    return '00';
  }

  return value.toString().split('.')[1];
}
