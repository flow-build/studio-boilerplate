import { useFormik } from 'formik';
import { Logger } from 'utils';
import * as yup from 'yup';

export const useForm = () => {
  const INITIAL_VALUES = {
    name: '',
    email: ''
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
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
