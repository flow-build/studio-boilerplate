'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import * as S from './styles';
import { HeaderProps } from './types';
import { Button } from '@mui/material';

export const Header: React.FC<HeaderProps> = ({ logo, links, button, loggedIn, username }) => {
  return (
    <AppBar position="static" color="default">
      <S.ToolbarHeader>
        {logo}
        <S.ContainerHeader loggedIn={loggedIn ?? false}>
          {links?.map((link, index) => (
            <S.DividedLink loggedIn={loggedIn ?? false} key={link.name}>
              <S.LinkHeader href={link.url}>{link.name}</S.LinkHeader>
            </S.DividedLink>
          ))}
        </S.ContainerHeader>
        {loggedIn === true ? (
          username != null && (
            <Button color="inherit" variant="outlined" size="large" onClick={button.onClick}>
              {username}
            </Button>
          )
        ) : (
          <Button color="inherit" variant="outlined" size="large" onClick={button.onClick}>
            {button.name}
          </Button>
        )}
      </S.ToolbarHeader>
    </AppBar>
  );
};
