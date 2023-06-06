import { AvatarProps } from '@mui/material';

import * as S from './styles';

export const Avatar = ({ ...props }: AvatarProps) => {
  return <S.Avatar {...props} />;
};
