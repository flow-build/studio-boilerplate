import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import _delay from 'lodash/delay';
import { useRouter } from 'next/navigation';
import api from 'services/httpClient';
import { setEmail, setResettingPassword } from 'store/slices/user';
import { Logger } from 'utils';
import * as yup from 'yup';

export const useForgotPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    email: ''
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required('Campo obrigatório').email('E-mail inválido')
  });

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    validateOnBlur: true,
    onSubmit
  });

  async function onSubmit(values: typeof INITIAL_VALUES) {
    dispatch(setResettingPassword(values.email));
    _delay(() => router.push('/reset-password'), 500);

    /* const result = await api.post('/api/forgotPassword/sendCode', { email: values.email });
    console.log({ result });

    if (result?.status === 200) {
      _delay(() => router.push('/verify-email'), 500);
    } else {
      Logger.error('error resetting password');
    } */
  }

  return { formik };
};
