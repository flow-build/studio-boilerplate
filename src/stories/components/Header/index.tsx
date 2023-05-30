'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HeaderProps } from './types';

import * as S from './styles';

export const Header: React.FC<HeaderProps> = ({ logo, links, button }) => {
  return (
    <AppBar position="static" color="default">
      <S.ToolbarHeader>
        {logo}
        <S.ContainerHeader>
          {links.map((link, index) => (
            <Typography variant="h6" key={link.name}>
              <S.LinkHeader href={link.url}>{link.name}</S.LinkHeader>
            </Typography>
          ))}
        </S.ContainerHeader>
        <S.ButtonHeader color="inherit" variant="outlined" size="large" onClick={button.onClick}>
          {button.name}
        </S.ButtonHeader>
      </S.ToolbarHeader>
    </AppBar>
  );
};
