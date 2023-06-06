'use client';

import { FormEvent } from 'react';

import Form, { IChangeEvent } from '@rjsf/core';
import { JSONSchema7 } from 'json-schema';
import { InputText } from 'stories/components';
import { Button } from 'stories/components/Forms/Button';
import { ValidationError } from 'yup';
import * as yup from 'yup';

import formSchema from './formSchema.json';
import * as S from './styles';
import { useForm } from './useForm';

interface FormData {
  name: string;
  email: string;
}

const MyCustomWidget = (props) => {
  return (
    <InputText
      type="text"
      label={props.label}
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
      margin="normal"
    />
  );
};

const widgets = {
  TextWidget: MyCustomWidget
};

export default function MyForm() {
  const { formik } = useForm();

  const handleFormSubmit = (
    data: IChangeEvent<FormData, JSONSchema7>,
    e: FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (data.formData) {
      formik.setValues(data.formData);
    }
    formik.handleSubmit(e);
  };

  const validate = async (formData: FormData, errors: ValidationError) => {
    const validationSchema = yup.object().shape({
      name: yup.string().required('Campo obrigatório'),
      email: yup.string().required('Campo obrigatório').email('E-mail inválido')
    });

    try {
      await validationSchema.validate(formData, { abortEarly: false });
    } catch (validationError) {
      validationError.inner.forEach((error) => {
        if (errors[error.path]) {
          errors[error.path].addError(error.message);
        }
      });
    }

    return errors;
  };

  return (
    <S.Wrapper>
      <Form
        schema={formSchema as JSONSchema7}
        widgets={widgets}
        onSubmit={handleFormSubmit}
        validator={validate}
      >
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    </S.Wrapper>
  );
}
