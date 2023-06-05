'use client';

import { useForgotPassword } from 'app/forgot-password/useForgotPassword';
import { ImageComponent, InputText } from 'stories/components';
import { Button } from 'stories/components/Forms/Button';
import { getErrorsFormik, getHelperTextFormik } from 'utils';

import * as S from './styles';

export default function ForgotPassword() {
  const { formik } = useForgotPassword();

  return (
    <S.Main>
      <S.Wrapper>
        <S.SideLeft>
          <ImageComponent
            src="https://img.logoipsum.com/263.svg"
            alt="Logo"
            width={150}
            height={30}
          />
        </S.SideLeft>

        <S.Form>
          <h3>Resetar senha</h3>
          <p>Insira o e-mail cadastrado para que você altere sua senha</p>

          <InputText
            label="E-mail"
            name="email"
            required
            value={formik.values.email}
            helperText={getHelperTextFormik(formik, 'email') ?? ' '}
            error={getErrorsFormik(formik, 'email')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Button type="submit" variant="outlined">
            Enviar
          </Button>
        </S.Form>
      </S.Wrapper>
    </S.Main>
  );
}
