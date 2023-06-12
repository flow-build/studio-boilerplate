import { FormikValues, useFormik } from 'formik';

export type TFormik<T extends FormikValues> = ReturnType<typeof useFormik<T>>;
