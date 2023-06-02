import React, { FC } from 'react';

import Grid from '@mui/material/Grid';

import { Disclaimer } from '../Disclaimer';
import { LinkGroup } from '../LinkGroup';
import { SocialNetworks } from '../SocialNetworks';
import * as S from './styles';
import { FooterProps } from './types';

export const Footer: FC<FooterProps> = ({ navLinks = [], socialMedia, disclaimer = '' }) => {
  return (
    <S.Container container>
      <S.Wrapper>
        <S.LinkWrapper container>
          {navLinks.map((group) => (
            <LinkGroup key={group.title} links={group.links} title={group.title} />
          ))}
          {socialMedia && <SocialNetworks title={socialMedia.title} icons={socialMedia.icons} />}
        </S.LinkWrapper>
        <Grid>{disclaimer && <Disclaimer text={disclaimer} />}</Grid>
      </S.Wrapper>
    </S.Container>
  );
};
