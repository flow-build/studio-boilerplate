import { useSelector } from 'react-redux';

import { useFormik } from 'formik';
import _delay from 'lodash/delay';
import { useRouter } from 'next/navigation';
import api from 'services/httpClient';
import { RootState } from 'store';
import { Logger } from 'utils';
import * as yup from 'yup';

export const useResetPassword = () => {
  const email = useSelector((state: RootState) => state.user.email);
  const router = useRouter();

  const INITIAL_VALUES = {
    newPassword: '',
    confirmPassword: ''
  };

  const validationSchemaLogin = yup.object().shape({
    newPassword: yup.string().required('Campo obrigatório'),
    confirmPassword: yup.string().required('Campo obrigatório')
  });

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validationSchemaLogin,
    validateOnBlur: true,
    onSubmit: onSubmit
  });

  async function onSubmit(values: typeof INITIAL_VALUES) {
    const result = await api.post('/api/forgotPassword/sendCode', { email });
    console.log({ result });

    if (result?.status === 200) {
      _delay(() => router.push('/verify-email'), 500);
    } else {
      Logger.error('error resetting password');
    }
  }

  return {
    formik,
    email
  };
};
