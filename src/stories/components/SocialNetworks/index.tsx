import React, { FC, useMemo } from 'react';

import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import * as S from './styles';
import { SocialNetworksProps } from './types';
import { getSocialNetworkIcon } from './utils';

export const SocialNetworks: FC<SocialNetworksProps> = ({ title = '', icons = [] }) => {
  const renderIcons = useMemo(() => {
    return icons.map(({ id, name, redirectLink }) => {
      const SocialNetworkIcon = getSocialNetworkIcon(name);

      return SocialNetworkIcon != null ? (
        <ListItem key={id}>
          <Link href={redirectLink} title={redirectLink}>
            <S.IconName>
              <SocialNetworkIcon fontSize="medium" />
              <Typography>{name}</Typography>
            </S.IconName>
          </Link>
        </ListItem>
      ) : null;
    });
  }, [icons]);

  return (
    <Grid container columns={12} item xs={12} sm={4} md={3} xl={3}>
      <Grid item xs={12}>
        <Typography variant="h4">{title}</Typography>
        <S.SocialNetworksContainer component="ul">{renderIcons}</S.SocialNetworksContainer>
      </Grid>
    </Grid>
  );
};
