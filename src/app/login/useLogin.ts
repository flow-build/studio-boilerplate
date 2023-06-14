'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import _delay from 'lodash/delay';
import _isEqual from 'lodash/isEqual';
import { useRouter } from 'next/navigation';
import api from 'services/httpClient';
import { messages } from 'shared/enum';
import { CognitoSignIn } from 'shared/types/cognito';
import { setIsLoading } from 'store/slices/loading';
import { setBasicInfosUser, setTempEmail } from 'store/slices/user';
import * as yup from 'yup';

export const useLogin = () => {
  const [loginError, setLoginError] = useState('');

  const router = useRouter();
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    username: '',
    password: ''
  };

  const validationSchemaLogin = yup.object().shape({
    username: yup.string().required(messages.fieldRequired).email(messages.invalidEmail),
    password: yup.string().required(messages.fieldRequired)
  });

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validationSchemaLogin,
    validateOnBlur: true,
    onSubmit: onSubmit
  });

  async function onSubmit(values: typeof INITIAL_VALUES) {
    try {
      dispatch(setIsLoading(true));
      const result = await api.post<CognitoSignIn>('/api/signIn', values);

      if (_isEqual(result?.status, 200)) {
        if (result.data?.attributes) {
          const { attributes } = result.data;
          dispatch(
            setBasicInfosUser({
              email: attributes.email,
              name: attributes.name,
              sub: attributes.sub
            })
          );
        }

        router.push('/');
      } else {
        setLoginError(result.message ?? '');
      }
    } catch (error) {
      if (error instanceof Error) {
        if (_isEqual(error.message, 'UserNotConfirmedException')) {
          dispatch(setTempEmail(values.username));
          _delay(() => router.push('/verify-email'), 500);
        }
      } else {
        setLoginError((error as Error).message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  return {
    formik,
    loginError,
    setLoginError
  };
};
