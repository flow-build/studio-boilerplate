'use client';

import { FormEvent, useState } from 'react';

import { Logo } from 'components';
import _isEqual from 'lodash/isEqual';
import { Button } from 'stories/components/Forms/Button';
import { OTPInput } from 'stories/components/Forms/OTPInput';
import { Logger } from 'utils';

import { defaultValues } from '../../constants';
import * as S from './styles';

const TOKEN_LENGTH = 5;

export default function Token() {
  const [token, setToken] = useState('');
  const disableButton = !_isEqual(token.length, TOKEN_LENGTH);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    Logger.info(token);
  }

  return (
    <S.Main>
      <S.Wrapper>
        <S.SideLeft>
          <Logo urlImg={defaultValues.urlImgLogo} />
        </S.SideLeft>

        <S.Form onSubmit={onSubmit}>
          <h3>Validação</h3>
          <p>Insira o token recebido pelo e-mail</p>

          <OTPInput autoFocus length={TOKEN_LENGTH} onChangeToken={setToken} />

          <Button type="submit" variant="outlined" disabled={disableButton}>
            Enviar
          </Button>
        </S.Form>
      </S.Wrapper>
    </S.Main>
  );
}
