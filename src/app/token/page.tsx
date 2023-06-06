'use client';

import { ImageComponent } from 'stories/components';
import { Button } from 'stories/components/Forms/Button';
import { OTPInput } from 'stories/components/Forms/OTPInput';
import { Logger } from 'utils';

import * as S from './styles';

export default function Token() {
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
          <h3>Validação</h3>
          <p>Insira o token recebido pelo e-mail</p>

          <OTPInput autoFocus length={5} onChangeToken={Logger.info} />

          <Button type="submit" variant="outlined">
            Enviar
          </Button>
        </S.Form>
      </S.Wrapper>
    </S.Main>
  );
}
