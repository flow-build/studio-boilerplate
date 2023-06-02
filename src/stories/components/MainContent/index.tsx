import { FC } from 'react';

import * as S from './styles';
import { MainContentProps } from './types';

export const MainContent: FC<MainContentProps> = ({ children }) => {
  return <S.MainContentWrapper>{children}</S.MainContentWrapper>;
};
