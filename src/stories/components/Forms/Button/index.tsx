import { ButtonProps } from '@mui/material';

import * as S from './styles';

export type Props = Omit<ButtonProps, 'sx'>;

export const Button: React.FC<Props> = ({ ...props }) => {
  return <S.Wrapper {...props} />;
};
