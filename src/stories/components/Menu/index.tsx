'use client';
import React, { FC } from 'react';

import Grid from '@mui/material/Grid';
import Link from 'next/link';

import { Logo } from '../Logo';
import * as S from './styles';
import { MenuProps } from './types';
import { useMenu } from './useMenu';
import { MenuVariant } from './utils';

export const Menu: FC<MenuProps> = ({ menuItems = [], logo, anchor, variant }) => {
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
                <Link href={item.redirectLink} key={item.id}>
                  <S.MenuItem key={item.id} disablePadding>
                    <S.TitleCategory primary={item.title} />
                  </S.MenuItem>
                </Link>
              ))}
            </S.MenuList>
          </Grid>
        </S.DrawerGrid>
      </S.MenuDrawer>
    </S.GridHeader>
  );
};
