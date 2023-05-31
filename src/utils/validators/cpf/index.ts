const CPF_LENGTH = 11;

const INVALID_CPFS = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999'
];

export function validateCPF(cpf: string): boolean {
  /* Replace space, dots and hyfens to a empty string */
  cpf = cpf.replace(/[\s.-]*/gim, '');

  const isEmpty = cpf === '';
  const invalidLength = cpf.length !== CPF_LENGTH;
  const isInvalidCPF = INVALID_CPFS.includes(cpf);

  if (isEmpty || invalidLength || isInvalidCPF) {
    return false;
  }

  let sum = 0;
  let rest;

  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  /* Check if it's different from the first checker digit */
  if (rest !== parseInt(cpf.substring(9, 10))) {
    return false;
  }

  sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  /* Verify if it equals the second checker digit */
  return rest === parseInt(cpf.substring(10, 11));
}
