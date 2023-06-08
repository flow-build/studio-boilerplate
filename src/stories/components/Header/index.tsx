'use client';
import React from 'react';

import { AppBar } from '@mui/material';

import { Logo } from '../Logo';
import { Menu } from '../Menu';
import * as S from './styles';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({
  logo,
  links,
  button,
  loggedIn,
  username,
  menu,
  avatar
}) => {
  return (
    <AppBar position="static" color="default">
      <S.ToolbarHeader>
        <S.Content>
          {menu && (
            <S.Wrapper>
              <Menu {...menu} />
            </S.Wrapper>
          )}
          {logo && <Logo />}
          <S.ContainerHeader loggedIn={loggedIn ?? false}>
            {links?.map((link) => (
              <S.DividedLink loggedIn={loggedIn ?? false} key={link.name}>
                <S.LinkHeader href={link.url}>{link.name}</S.LinkHeader>
              </S.DividedLink>
            ))}
          </S.ContainerHeader>
          {loggedIn === true ? (
            username != null && (
              <>
                {avatar ?? (
                  <S.ButtonHeader
                    color="inherit"
                    variant="outlined"
                    size="large"
                    onClick={button.onClick}
                  >
                    {username}
                  </S.ButtonHeader>
                )}
              </>
            )
          ) : (
            <S.ButtonHeader
              color="inherit"
              variant="outlined"
              size="large"
              onClick={button.onClick}
            >
              {button.name}
            </S.ButtonHeader>
          )}
        </S.Content>
      </S.ToolbarHeader>
    </AppBar>
  );
};
