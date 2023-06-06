import React from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

import * as S from './styles';
import { LoadingProps } from './types';

export function Loading({ size }: LoadingProps) {
  return (
    <>
      <S.Container>
        <S.LoaderContainer>
          <CircularProgress size={size} />
        </S.LoaderContainer>
      </S.Container>
      <Backdrop sx={{ zIndex: 999999998 }} open={true} />
    </>
  );
}
