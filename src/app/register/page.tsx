'use client';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import { InputPassword, InputText } from 'stories/components';
import { getErrorsFormik, getHelperTextFormik, maskCPF, maskPhoneNumber } from 'utils';

import * as S from './styles';
import { useRegister } from './useRegister';

export default function Register() {
  const { formik } = useRegister();

  return (
    <S.Main>
      <S.Wrapper>
        <S.Form onSubmit={formik.handleSubmit}>
          <h3>Cadastro</h3>

          <InputText
            label="Nome"
            name="name"
            value={formik.values.name}
            helperText={getHelperTextFormik(formik, 'name')}
            error={getErrorsFormik(formik, 'name')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputText
            label="E-mail"
            name="email"
            value={formik.values.email}
            helperText={getHelperTextFormik(formik, 'email')}
            error={getErrorsFormik(formik, 'email')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputText
            label="Celular"
            name="phone"
            value={formik.values.phone}
            helperText={getHelperTextFormik(formik, 'phone')}
            error={getErrorsFormik(formik, 'phone')}
            onChange={(e) => {
              const value = maskPhoneNumber(e.target.value);
              formik.setFieldValue('phone', value);
            }}
            onBlur={formik.handleBlur}
          />
          <InputText
            label="CPF"
            name="fiscalId"
            value={formik.values.fiscalId}
            helperText={getHelperTextFormik(formik, 'fiscalId')}
            error={getErrorsFormik(formik, 'fiscalId')}
            onChange={(e) => {
              const value = maskCPF(e.target.value);
              formik.setFieldValue('fiscalId', value);
            }}
            onBlur={formik.handleBlur}
          />
          <InputPassword
            label="Senha"
            name="password"
            value={formik.values.password}
            helperText={getHelperTextFormik(formik, 'password')}
            error={getErrorsFormik(formik, 'password')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputPassword
            label="Confirmação da senha"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            helperText={getHelperTextFormik(formik, 'confirmPassword')}
            error={getErrorsFormik(formik, 'confirmPassword')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <S.FooterForm>
            <span>
              <Checkbox aria-label="remember" />
              <span>
                Li e aceito os <Link href="#">temos</Link> de uso
              </span>
            </span>
          </S.FooterForm>
          <Button type="submit" variant="contained" color="success">
            Caadstrar
          </Button>
        </S.Form>
      </S.Wrapper>
    </S.Main>
  );
}
