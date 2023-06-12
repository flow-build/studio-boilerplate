import MUIAvatar, { AvatarProps } from '@mui/material/Avatar';

import * as S from './styles';
import { Props } from './types';

export const Avatar = ({ email, ...props }: Props & AvatarProps) => {
  return (
    <S.AvatarWrapper>
      <MUIAvatar {...props} />
      {email && <S.EmailText>{email}</S.EmailText>}
    </S.AvatarWrapper>
  );
};
