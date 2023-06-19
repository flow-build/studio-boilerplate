import Checkbox from '@mui/material/Checkbox';
import { Logo } from 'components';
import { useLogin } from 'hooks/useLoginPage';
import Link from 'next/link';
import { project } from 'shared/enum';
import { InputPassword, InputText } from 'stories/components';
import { Button } from 'stories/components/Forms/Button';
import * as S from 'styles/loginPageStyles';
import { getErrorsFormik, getHelperTextFormik } from 'utils';

export default function Login() {
  const { formik } = useLogin();

  return (
    <S.Main>
      <S.Wrapper>
        <S.SideLeft>
          <Logo urlImg={project.urlImgLogo} />
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
      </S.Wrapper>
    </S.Main>
  );
}
