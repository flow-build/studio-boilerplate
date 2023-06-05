import { useFormik } from 'formik';
import { Logger } from 'utils';
import * as yup from 'yup';

export const useForgotPassword = () => {
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
    onSubmit: Logger.info
  });

  return { formik };
};
