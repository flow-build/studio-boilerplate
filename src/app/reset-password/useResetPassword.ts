import { useDispatch, useSelector } from 'react-redux';

import { cryptoConfig } from 'config/crypto';
import { messages } from 'constants/index';
import cryptoJs from 'crypto-js';
import { useFormik } from 'formik';
import _delay from 'lodash/delay';
import { useRouter } from 'next/navigation';
import api from 'services/httpClient';
import { RootState } from 'store';
import { setNewPassword } from 'store/slices/user';
import { Logger } from 'utils';
import * as yup from 'yup';

export const useResetPassword = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.user.email);
  const router = useRouter();

  const INITIAL_VALUES = {
    newPassword: '',
    confirmPassword: ''
  };

  const validationSchemaLogin = yup.object().shape({
    newPassword: yup.string().required('Campo obrigatório'),
    confirmPassword: yup
      .string()
      .required(messages.fieldRequired)
      .oneOf([yup.ref('newPassword')], messages.passwordNoMatch)
  });

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validationSchemaLogin,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: onSubmit
  });

  async function onSubmit(values: typeof INITIAL_VALUES) {
    const result = await api.post('/api/forgotPassword/sendCode', { email });

    if (result?.status === 200) {
      const hash = cryptoJs.AES.encrypt(
        values.newPassword,
        cryptoConfig.secretKey as string
      ).toString();

      dispatch(setNewPassword(hash));
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
