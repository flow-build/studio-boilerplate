'use client';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import { ImageComponent, InputPassword, InputText } from 'stories/components';

import * as S from './styles';
import { useLogin } from './useLogin';

export default function Login() {
  const { formik } = useLogin();

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
        <S.Form onSubmit={formik.handleSubmit}>
          <h3>Acesse sua conta</h3>

          <InputText
            label="E-mail"
            name="username"
            value={formik.values.username}
            helperText={formik.errors.username}
            error={!!formik.errors.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <InputPassword
            label="Senha"
            name="password"
            value={formik.values.password}
            helperText={formik.errors.password}
            error={!!formik.errors.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <S.FooterForm>
            <span>
              <Checkbox aria-label="remember" />
              <span>Lembrar-me</span>
            </span>
            <Link href="/esqueci-minha-senha">Esqueci minha senha</Link>
          </S.FooterForm>
          <Button type="submit" variant="outlined">
            Entrar
          </Button>
        </S.Form>
      </S.Wrapper>
    </S.Main>
  );
}
