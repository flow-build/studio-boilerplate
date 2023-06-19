import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import _delay from 'lodash/delay';
import { useRouter } from 'next/navigation';
import { messages } from 'shared/enum';
import { setResettingPassword } from 'store/slices/user';
import * as yup from 'yup';

export const useForgotPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    email: ''
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required(messages.fieldRequired).email(messages.invalidEmail)
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
  }

  return { formik };
};
