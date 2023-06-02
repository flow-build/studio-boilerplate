import React, { FC } from 'react';

import * as S from './styles';
import { DisclaimerProps } from './types';

export const Disclaimer: FC<DisclaimerProps> = ({ text = '' }) => {
  return (
    <S.Container data-testid="disclaimer" item xs={12}>
      <span>{text}</span>
    </S.Container>
  );
};
