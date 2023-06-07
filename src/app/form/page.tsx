'use client';

import { useState } from 'react';

import Form, { IChangeEvent } from '@rjsf/core';
import { WidgetProps } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { JSONSchema7 } from 'json-schema';
import { InputText } from 'stories/components';
import { Button } from 'stories/components/Forms/Button';
import { Logger } from 'utils';

import formSchema from './formSchema.json';
import * as S from './styles';
import { FormData } from './types';
import { handleCustomValidate, handleTransformErrors } from './useForm';

const MyCustomTextWidget = (props: WidgetProps) => {
  const { rawErrors = [] } = props;
  const hasError = rawErrors.length > 0;

  return (
    <InputText
      type="text"
      label={props.label}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(event) => props.onChange(event.target.value)}
      error={hasError}
      helperText={hasError}
      sx={hasError ? { color: 'red' } : {}}
      margin="normal"
    />
  );
};

const widgets = {
  TextWidget: MyCustomTextWidget
};

export default function MyForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });

  const handleFormChange = ({ formData }: IChangeEvent<FormData>) => {
    if (formData) {
      setFormData(formData);
    }
  };

  const handleFormSubmit = ({ formData }: IChangeEvent<FormData>) => {
    Logger.info('Data submitted: ', formData);

    setFormData({ name: '', email: '' });
  };

  return (
    <S.Wrapper>
      <Form
        schema={formSchema as JSONSchema7}
        formData={formData}
        widgets={widgets}
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
        validator={validator}
        customValidate={handleCustomValidate}
        transformErrors={handleTransformErrors}
        noHtml5Validate
        showErrorList={false}
      >
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    </S.Wrapper>
  );
}
