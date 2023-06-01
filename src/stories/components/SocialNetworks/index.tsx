import React, { FC } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Item } from './components/Item';
import * as S from './styles';
import { SocialNetworksProps } from './types';

export const SocialNetworks: FC<SocialNetworksProps> = ({ title = '', icons = [] }) => {
  return (
    <Grid container columns={12} item xs={12} sm={4} md={3} xl={3}>
      <Grid item xs={12}>
        <Typography variant="h4">{title}</Typography>
        <S.SocialNetworksContainer component="ul">
          {icons.map(({ id, name, redirectLink }) => (
            <Item key={id} id={id} name={name} redirectLink={redirectLink} />
          ))}
        </S.SocialNetworksContainer>
      </Grid>
    </Grid>
  );
};
