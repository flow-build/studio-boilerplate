import React from 'react';

import * as S from './styles';
import { LoadingProps } from './types';

export function Loading({ size }: LoadingProps) {
  return (
    <>
      <S.Container>
        <S.LoaderContainer>
          <S.CircularProgress size={size} />
        </S.LoaderContainer>
      </S.Container>
      <S.Backdrop open={true} />
    </>
  );
}
