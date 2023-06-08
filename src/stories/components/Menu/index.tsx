'use client';
import React, { FC } from 'react';

import Grid from '@mui/material/Grid';
import { getAvatarURL } from 'utils';

import { Avatar } from '../Avatar';
import { IconLink } from '../IconLink';
import { Logo } from '../Logo';
import * as S from './styles';
import { MenuProps } from './types';
import { useMenu } from './useMenu';
import { MenuVariant } from './utils';

export const Menu: FC<MenuProps> = ({ menuItems = [], logo, anchor, variant, email, username }) => {
  const { isOpen, handleOpen, handleClose } = useMenu();

  return (
    <S.GridHeader item xs={1}>
      <S.MenuButton variant="outlined" onClick={handleOpen}>
        <S.MenuIcon fontSize="small" />
      </S.MenuButton>
      <S.MenuDrawer
        variant={variant}
        anchor={anchor}
        open={isOpen}
        onOpen={handleOpen}
        onClose={handleClose}
        transitionDuration={300}
      >
        <S.DrawerGrid>
          <S.ButtonWrapper>
            <S.LogoWrapper hasLogo={!!logo}>{logo && <Logo />}</S.LogoWrapper>
            {variant !== MenuVariant.permanent && (
              <S.CloseDrawerButton variant="outlined" onClick={handleClose}>
                <S.CloseDrawerIcon fontSize="small" />
              </S.CloseDrawerButton>
            )}
          </S.ButtonWrapper>
          <Grid item xs={12}>
            <S.MenuList>
              {menuItems.map((item) => (
                <S.LinkIcon href={item.redirectLink} key={item.id}>
                  {item.icon && <IconLink {...item.icon} />}
                  <S.MenuItem key={item.id} disablePadding>
                    <S.TitleCategory primary={item.title} />
                  </S.MenuItem>
                </S.LinkIcon>
              ))}
            </S.MenuList>
            {email && <Avatar alt={username} src={getAvatarURL(email)} email={email} />}
          </Grid>
        </S.DrawerGrid>
      </S.MenuDrawer>
    </S.GridHeader>
  );
};
