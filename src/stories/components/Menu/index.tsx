import React, { FC } from 'react';

import Grid from '@mui/material/Grid';
import { Logo } from 'components';
import Link from 'next/link';
import { getAvatarURL } from 'utils';

import { Avatar } from '../Avatar';
import { IconLink } from '../IconLink';
import * as S from './styles';
import { MenuProps } from './types';
import { useMenu } from './useMenu';
import { MenuVariant } from './utils';

export const Menu: FC<MenuProps> = ({ menuItems = [], urlImgLogo, anchor, variant, username }) => {
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
            <S.LogoWrapper hasLogo={!!urlImgLogo}>
              {urlImgLogo && <Logo urlImg={urlImgLogo} />}
            </S.LogoWrapper>
            {variant !== MenuVariant.permanent && (
              <S.CloseDrawerButton variant="outlined" onClick={handleClose}>
                <S.CloseDrawerIcon fontSize="small" />
              </S.CloseDrawerButton>
            )}
          </S.ButtonWrapper>
          <Grid item xs={12}>
            <S.MenuList>
              {menuItems.map((item) => (
                <S.LinkIcon key={item.id} onClick={() => handleClose()}>
                  {item.icon && <IconLink {...item.icon} />}
                  <S.MenuItem key={item.id} disablePadding>
                    <Link href={item.redirectLink}>
                      <S.TitleCategory primary={item.title} />
                    </Link>
                  </S.MenuItem>
                </S.LinkIcon>
              ))}
            </S.MenuList>
            {username && <Avatar alt={username} src={getAvatarURL(username)} email={username} />}
          </Grid>
        </S.DrawerGrid>
      </S.MenuDrawer>
    </S.GridHeader>
  );
};
