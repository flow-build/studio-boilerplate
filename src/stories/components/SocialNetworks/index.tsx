import React, { FC } from 'react';

import Grid from '@mui/material/Grid';

import { ItemIcon } from './components/Item';
import * as S from './styles';
import { SocialNetworksProps } from './types';

export const SocialNetworks: FC<SocialNetworksProps> = ({ title = '', icons = [] }) => {
  return (
    <S.Wrapper container columns={12} item xs={12} sm={4} md={3} xl={3}>
      <Grid item>
        <S.Title>{title}</S.Title>
        <S.SocialNetworksContainer component="ul">
          {icons.map(({ id, name, redirectLink }) => (
            <ItemIcon key={id} id={id} name={name} redirectLink={redirectLink} />
          ))}
        </S.SocialNetworksContainer>
      </Grid>
    </S.Wrapper>
  );
};
