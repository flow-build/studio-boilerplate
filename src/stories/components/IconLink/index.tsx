'use client';
import * as React from 'react';

import { Grid, Link } from '@mui/material';

import * as S from './styles';
import { IconLinkProps } from './types';

export const IconLink: React.FC<IconLinkProps> = ({
  icon: IconComponent,
  badge = 0,
  redirectLink
}) => {
  return (
    <S.Content>
      <Grid
        id="icon-link"
        item
        xs={1}
        display="center"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Link href={redirectLink}>
          <S.AlertIcon badgeContent={badge} color="error">
            <IconComponent />
          </S.AlertIcon>
        </Link>
      </Grid>
    </S.Content>
  );
};
