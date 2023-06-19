import * as React from 'react';

import { Grid } from '@mui/material';

import * as S from './styles';
import { IconLinkProps } from './types';

export const IconLink: React.FC<IconLinkProps> = ({
  icon: IconComponent,
  badge = 0,
  redirectLink,
  title
}) => {
  return (
    <S.Content>
      <Grid item xs={1}>
        <S.LinkIcon href={redirectLink}>
          <S.Title>{title}</S.Title>
          <S.AlertIcon badgeContent={badge} color="error">
            <IconComponent />
          </S.AlertIcon>
        </S.LinkIcon>
      </Grid>
    </S.Content>
  );
};
