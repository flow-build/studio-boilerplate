import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import _delay from 'lodash/delay';
import _isEqual from 'lodash/isEqual';
import { useRouter } from 'next/navigation';
import api from 'services/httpClient';
import { CognitoSignIn } from 'shared/types/cognito';
import { setEmail } from 'store/slices/user';
import { Logger } from 'utils';
import * as yup from 'yup';

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    username: '',
    password: ''
  };

  const validationSchemaLogin = yup.object().shape({
    username: yup.string().required('Campo obrigatório').email('E-mail inválido'),
    password: yup.string().required('Campo obrigatório')
  });

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validationSchemaLogin,
    validateOnBlur: true,
    onSubmit: onSubmit
  });

  async function onSubmit(values: typeof INITIAL_VALUES) {
    try {
      const result = await api.post<CognitoSignIn>('/api/signIn', values);

      if (_isEqual(result?.status, 200)) {
        router.push('/');
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        if (_isEqual(error.message, 'UserNotConfirmedException')) {
          dispatch(setEmail(values.username));
          _delay(() => router.push('/verify-email'), 500);
        }
      }

      Logger.error({ error });
    }
  }

  return {
    formik
  };
};
