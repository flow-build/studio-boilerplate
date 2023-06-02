import { useFormik } from 'formik';
import { Logger } from 'utils';
import * as yup from 'yup';

export const useLogin = () => {
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
    onSubmit: Logger.info
  });

  return {
    formik
  };
};
