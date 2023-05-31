'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import * as S from './styles';
import { HeaderProps } from './types';
import { Button } from '@mui/material';

export const Header: React.FC<HeaderProps> = ({ logo, links, button, loggedIn, username }) => {
  if (loggedIn ?? false) {
    return (
      <AppBar position="static" color="default">
        <S.ToolbarHeader>
          {logo}
          <S.ContainerHeaderLogged>
            {links?.map((link, index) => (
              <React.Fragment key={link.name}>
                <Typography>
                  <S.LinkHeader href={link.url}>{link.name}</S.LinkHeader>
                </Typography>
                {index !== links.length - 1 && <S.DividerHeader>|</S.DividerHeader>}
              </React.Fragment>
            ))}
          </S.ContainerHeaderLogged>
          {username != null && (
            <Button color="inherit" variant="outlined" size="large" onClick={button.onClick}>
              {username}
            </Button>
          )}
        </S.ToolbarHeader>
      </AppBar>
    );
  }
  return (
    <AppBar position="static" color="default">
      <S.ToolbarHeader>
        {logo}
        <S.ContainerHeader>
          {links?.map((link, index) => (
            <Typography key={link.name}>
              <S.LinkHeader href={link.url}>{link.name}</S.LinkHeader>
            </Typography>
          ))}
        </S.ContainerHeader>
        <Button color="inherit" variant="outlined" size="large" onClick={button.onClick}>
          {button.name}
        </Button>
      </S.ToolbarHeader>
    </AppBar>
  );
};
