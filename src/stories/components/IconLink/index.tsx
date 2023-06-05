import * as React from 'react';

import { Grid, Link, Icon } from '@mui/material';

import * as S from './styles';
import { IconLinkProps } from './types';

export const IconLink: React.FC<IconLinkProps> = ({ icon, badge = 0, redirectLink, iconSize }) => {
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
            <Icon icon={icon} iconSize={iconSize} />
          </S.AlertIcon>
        </Link>
      </Grid>
    </S.Content>
  );
};
