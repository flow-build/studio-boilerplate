import { FormValidation, RJSFValidationError } from '@rjsf/utils';

import { FormData } from './types';

export function handleCustomValidate(formData: FormData, errors: FormValidation) {
  if (!formData.name) {
    errors?.name?.addError('Nome é obrigatório');
  }
  if (!formData.email) {
    errors?.email?.addError('Email é obrigatório');
  }
  return errors;
}

export function handleTransformErrors(errors: RJSFValidationError[]) {
  return errors.map((error) => {
    if (error.name === 'pattern') {
      return {
        ...error,
        message: 'Por favor, insira um endereço de email válido.'
      };
    }
    return error;
  });
}
