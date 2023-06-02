import { useFormik } from 'formik';
import { Logger, validateCPF } from 'utils';
import * as yup from 'yup';

import { messages } from '../../constants';

export const useRegister = () => {
  const INITIAL_VALUES = {
    name: '',
    email: '',
    phone: '',
    fiscalId: '',
    password: '',
    confirmPassword: ''
  };

  const validations = {
    name: yup.string().required(messages.fieldRequired),
    email: yup.string().required(messages.fieldRequired).email(messages.emailRequired),
    phone: yup.string(),
    fiscalId: yup.string().test('valid fiscalId', messages.invalidFiscalId, (value) => {
      if (!value) return true;
      return validateCPF(value);
    }),
    password: yup.string().required(messages.fieldRequired),
    confirmPassword: yup
      .string()
      .required(messages.fieldRequired)
      .oneOf([yup.ref('password')], messages.passwordNoMatch)
  };

  const validationSchemaRegister = yup.object().shape(validations);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validationSchemaRegister,
    validateOnBlur: true,
    onSubmit: Logger.info
  });

  return {
    formik
  };
};
