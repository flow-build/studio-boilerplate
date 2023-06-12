'use client';

import { redirect } from 'next/navigation';
import { InputPassword } from 'stories/components';
import { Button } from 'stories/components/Forms/Button';
import { Logo } from 'stories/components/Logo';
import { SnackbarAlerts } from 'stories/components/SnackbarAlert';
import { getErrorsFormik, getHelperTextFormik } from 'utils';

import { defaultValues } from '../../constants';
import * as S from './styles';
import { useResetPassword } from './useResetPassword';

export default function ResetPassword() {
  const { formik, email, notification, setNotification, successMessage } = useResetPassword();

  if (!email) {
    redirect('/login');
  }

  const getSeverity = () => {
    if (notification) {
      return 'error';
    } else if (successMessage) {
      return 'success';
    } else {
      return 'error';
    }
  };

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
        <SnackbarAlerts
          setOpen={() => setNotification('')}
          open={!!notification || !!successMessage}
          message={notification || successMessage}
          severity={getSeverity()}
          onClose={() => setNotification('')}
        />
      </S.Wrapper>
    </S.Main>
  );
}
