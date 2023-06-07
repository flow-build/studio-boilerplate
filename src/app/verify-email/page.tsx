'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import _isEqual from 'lodash/isEqual';
import { redirect, useRouter } from 'next/navigation';
import api from 'services/httpClient';
import { RootState, store } from 'store';
import { reset, setNewPassword } from 'store/slices/user';
import { Button } from 'stories/components/Forms/Button';
import { OTPInput } from 'stories/components/Forms/OTPInput';
import { Logo } from 'stories/components/Logo';
import { Logger } from 'utils';

import * as S from './styles';

const TOKEN_LENGTH = 6;

export default function VerifyEmail() {
  const router = useRouter();
  const dispatch = useDispatch();

  const newPassword = useRef(store.getState().user.newPassword);
  const email = useSelector((state: RootState) => state.user.email);
  const resettingPassword = useSelector((state: RootState) => state.user.resettingPassword);

  const [token, setToken] = useState('');
  const disableButton = !_isEqual(token.length, TOKEN_LENGTH);

  console.log({ newPassword: newPassword.current, ref: newPassword });

  async function handleResetPasswordSubmit() {
    await api.post('/api/forgotPassword/submit', {
      username: email,
      newPassword: newPassword.current,
      code: token
    });

    router.replace('/login');
  }

  async function handleSignUpSubmit(): Promise<void> {
    try {
      const result = await api.post('/api/verifyEmail', { email, code: token });

      if (_isEqual(result.status, 200)) {
        router.replace('/login');
      }

      throw new Error(result.message);
    } catch (error) {
      if (error instanceof Error) {
        if (_isEqual(error.message, 'CodeMismatchException')) {
          console.log('Código inválido');
        }
      }
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    Logger.info(token);

    if (resettingPassword) {
      await handleResetPasswordSubmit();
      return;
    }

    await handleSignUpSubmit();
  }

  async function resendCode() {
    if (resettingPassword) {
      await api.post('/api/forgotPassword/sendCode', { email });
      return;
    }

    await api.post('/api/resendCode', { email });
  }

  useEffect(() => {
    dispatch(setNewPassword());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  if (!email) {
    redirect('/login');
  }

  return (
    <S.Main>
      <S.Wrapper>
        <S.SideLeft>
          <Logo />
        </S.SideLeft>

        <S.Form onSubmit={onSubmit}>
          <h3>Validação de e-mail</h3>
          <p>
            Insira o token enviado para <strong>{email}</strong>
          </p>

          <OTPInput autoFocus length={TOKEN_LENGTH} onChangeToken={setToken} />

          <Button type="submit" variant="contained" disabled={disableButton}>
            Enviar
          </Button>

          <Button type="button" variant="text" onClick={resendCode}>
            Reenviar código
          </Button>
        </S.Form>
      </S.Wrapper>
    </S.Main>
  );
}
