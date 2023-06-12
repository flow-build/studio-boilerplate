import { FormValidation, RJSFValidationError } from '@rjsf/utils';

import { messages } from '../../constants';
import { FormData } from './types';

export function handleCustomValidate(formData: FormData, errors: FormValidation) {
  if (!formData.name) {
    errors?.name?.addError(messages.fieldRequired);
  }
  if (!formData.email) {
    errors?.email?.addError(messages.fieldRequired);
  }
  return errors;
}

export function handleTransformErrors(errors: RJSFValidationError[]) {
  return errors.map((error) => {
    if (error.name === 'pattern') {
      return {
        ...error,
        message: messages.invalidEmail
      };
    }
    return error;
  });
}
