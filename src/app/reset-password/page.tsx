'use client';

import Button from '@mui/material/Button';
import { redirect } from 'next/navigation';
import { InputPassword } from 'stories/components';
import { Logo } from 'stories/components/Logo';
import { getErrorsFormik, getHelperTextFormik } from 'utils';

import * as S from './styles';
import { useResetPassword } from './useResetPassword';

export default function Login() {
  const { formik, email } = useResetPassword();

  if (!email) {
    redirect('/login');
  }

  return (
    <S.Main>
      <S.Wrapper>
        <S.SideLeft>
          <Logo />
        </S.SideLeft>
        <S.Form onSubmit={formik.handleSubmit}>
          <h3>Reset sua senha</h3>
          <p>
            Após esta etapa, será enviado um e-mail para <strong>{email}</strong> com o token para
            confirmação da alteração.
          </p>

          <InputPassword
            label="Senha Nova"
            name="newPassword"
            value={formik.values.newPassword}
            helperText={getHelperTextFormik(formik, 'newPassword')}
            error={getErrorsFormik(formik, 'newPassword')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <InputPassword
            label="Confirme a senha"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            helperText={getHelperTextFormik(formik, 'confirmPassword')}
            error={getErrorsFormik(formik, 'confirmPassword')}
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
