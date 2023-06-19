import { Logo } from 'components';
import { useResetPassword } from 'hooks/useResetPasswordPage';
import { redirect } from 'next/navigation';
import { project } from 'shared/enum';
import { Button, InputPassword } from 'stories/components';
import * as S from 'styles/resetPasswordPageStyles';
import { getErrorsFormik, getHelperTextFormik } from 'utils';

export default function ResetPassword() {
  const { formik, email } = useResetPassword();

  if (!email) {
    redirect('/login');
  }

  return (
    <S.Main>
      <S.Wrapper>
        <S.SideLeft>
          <Logo urlImg={project.urlImgLogo} />
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
