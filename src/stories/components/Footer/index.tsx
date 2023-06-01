import React, { FC } from 'react';

import Grid from '@mui/material/Grid';

import { Disclaimer } from '../Disclaimer';
import { LinkGroup } from '../LinkGroup';
import { LinkItem } from '../LinkGroup/types';
import { SocialNetworks } from '../SocialNetworks';
import { InterfaceIcon, SocialNetworksProps } from '../SocialNetworks/types';
import * as S from './styles';
import { FooterProps } from './types';

export const Footer: FC<FooterProps> = ({ navLinks = [], socialMedias = [], disclaimer = '' }) => {
  const links: LinkItem[] = navLinks.flatMap((linkGroup) => linkGroup.links);

  const socialIcons: InterfaceIcon[] = socialMedias.flatMap(
    (socialMedia: SocialNetworksProps) => socialMedia.icons
  );
  return (
    <S.Container item container>
      <S.LinkWrapper container>
        <LinkGroup title={'Lorem Ipsum'} links={links} />
        <SocialNetworks title={'Lorem Ipsum'} icons={socialIcons} />
      </S.LinkWrapper>
      <Grid>
        <Disclaimer text={disclaimer} />
      </Grid>
    </S.Container>
  );
};
