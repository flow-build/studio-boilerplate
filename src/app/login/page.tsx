'use client';
import Checkbox from '@mui/material/Checkbox';
import { Logo } from 'components';
import Link from 'next/link';
import { InputPassword, InputText, SnackbarAlerts } from 'stories/components';
import { Button } from 'stories/components/Forms/Button';
import { getErrorsFormik, getHelperTextFormik } from 'utils';

import { defaultValues } from '../../constants';
import * as S from './styles';
import { useLogin } from './useLogin';

export default function Login() {
  const { formik, loginError, setLoginError } = useLogin();

  return (
    <S.Main>
      <S.Wrapper>
        <S.SideLeft>
          <Logo urlImg={defaultValues.urlImgLogo} />
        </S.SideLeft>
        <S.Form onSubmit={formik.handleSubmit}>
          <h3>Acesse sua conta</h3>

          <InputText
            label="E-mail"
            name="username"
            value={formik.values.username}
            helperText={getHelperTextFormik(formik, 'username')}
            error={getErrorsFormik(formik, 'username')}
            onChange={formik.handleChange}
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

          <S.FooterForm>
            <span>
              <Checkbox aria-label="remember" />
              <span>Lembrar-me</span>
            </span>
            <Link href="/forgot-password">Esqueci minha senha</Link>
          </S.FooterForm>
          <Button type="submit" variant="outlined">
            Entrar
          </Button>
        </S.Form>

        <SnackbarAlerts
          setOpen={() => setLoginError('')}
          open={!!loginError}
          message={loginError}
          severity={'error'}
          onClose={() => setLoginError('')}
        />
      </S.Wrapper>
    </S.Main>
  );
}
