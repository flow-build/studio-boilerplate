import React, { FC } from 'react';

import Grid from '@mui/material/Grid';
import Link from 'next/link';

import * as S from './styles';
import { MenuProps } from './types';
import { useMenu } from './useMenu';
import { MenuOptions, MenuVariant } from './utils';

export const Menu: FC<MenuProps> = ({ type, menuItems = [], logo, anchor, variant }) => {
  const { isOpen, handleOpen, handleClose } = useMenu();

  const renderedMenuHamburger = React.useMemo(() => {
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
              <S.LogoWrapper logo={logo}>{logo}</S.LogoWrapper>
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
  }, [handleOpen, variant, anchor, isOpen, handleClose, logo, menuItems]);

  switch (type) {
    case MenuOptions.hamburger:
      return renderedMenuHamburger;
    case MenuOptions.horizontal:
      return <h1>Horizontal</h1>;
    case MenuOptions.vertical:
      return <h1>Vertical</h1>;
    default:
      return renderedMenuHamburger;
  }
};
