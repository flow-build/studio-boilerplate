'use client';

import Button from '@mui/material/Button';
import { Logo } from 'components';
import { redirect } from 'next/navigation';
import { InputPassword } from 'stories/components';
import { getErrorsFormik, getHelperTextFormik } from 'utils';

import { defaultValues } from '../../constants';
import * as S from './styles';
import { useResetPassword } from './useResetPassword';

export default function ResetPassword() {
  const { formik, email } = useResetPassword();

  if (!email) {
    redirect('/login');
  }

  return (
    <S.Main>
      <S.Wrapper>
        <S.SideLeft>
          <Logo urlImg={defaultValues.urlImgLogo} />
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
            required
            value={formik.values.newPassword}
            helperText={getHelperTextFormik(formik, 'newPassword')}
            error={getErrorsFormik(formik, 'newPassword')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <InputPassword
            label="Confirme a senha"
            name="confirmPassword"
            required
            value={formik.values.confirmPassword}
            helperText={getHelperTextFormik(formik, 'confirmPassword')}
            error={getErrorsFormik(formik, 'confirmPassword')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Button type="submit" variant="outlined" disabled={!formik.isValid}>
            Enviar
          </Button>
        </S.Form>
      </S.Wrapper>
    </S.Main>
  );
}
