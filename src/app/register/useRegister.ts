'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import _delay from 'lodash/delay';
import { useRouter } from 'next/navigation';
import { messages } from 'shared/enum';
import { setTempEmail } from 'store/slices/user';
import { validateCPF } from 'utils';
import * as yup from 'yup';

import api from '../../services/httpClient';

export const useRegister = () => {
  const [notification, setNotification] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const INITIAL_VALUES = {
    name: '',
    email: '',
    phone: '',
    fiscalId: '',
    password: '',
    confirmPassword: ''
  };
  const router = useRouter();
  const dispatch = useDispatch();

  const validations = {
    name: yup.string().required(messages.fieldRequired),
    email: yup.string().required(messages.fieldRequired).email(messages.invalidEmail),
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
    onSubmit: async (values) => {
      try {
        const result = await api.post<{ status: number }>('/api/signUp', values);
        if (result?.status === 200) {
          dispatch(setTempEmail(values.email));
          setSuccessMessage('Cadastro bem-sucedido!');
          setNotification(successMessage);
          _delay(() => {
            router.push('/verify-email');
          }, 500);
        } else {
          setNotification(result.message ?? '');
        }
      } catch (error) {
        setNotification((error as Error).message);
      }
    }
  });

  return {
    formik,
    notification,
    setNotification,
    successMessage
  };
};
