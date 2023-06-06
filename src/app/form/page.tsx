'use client';

import { FormEvent } from 'react';

import Form, { IChangeEvent } from '@rjsf/core';
import { WidgetProps } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { JSONSchema7 } from 'json-schema';
import { InputText } from 'stories/components';
import { Button } from 'stories/components/Forms/Button';

import formSchema from './formSchema.json';
import * as S from './styles';

interface FormData {
  name: string;
  email: string;
}

const MyCustomWidget = (props: WidgetProps) => {
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
  const handleFormSubmit = (data: IChangeEvent<FormData>, e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (data.formData) {
      console.log('Data submitted: ', data.formData);
    }
  };

  return (
    <S.Wrapper>
      <Form
        schema={formSchema as JSONSchema7}
        widgets={widgets}
        onSubmit={handleFormSubmit}
        validator={validator}
      >
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    </S.Wrapper>
  );
}
