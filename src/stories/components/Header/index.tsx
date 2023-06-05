'use client';
import React from 'react';

import { Person } from '@mui/icons-material';
import { AppBar } from '@mui/material';

import { IconLink } from '../IconLink';
import * as S from './styles';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({
  logo,
  links,
  button,
  loggedIn,
  username,
  icon
}) => {
  return (
    <AppBar position="static" color="default">
      <S.ToolbarHeader>
        <S.Content>
          {logo}
          <S.ContainerHeader loggedIn={loggedIn ?? false}>
            {links?.map((link) => (
              <S.DividedLink loggedIn={loggedIn ?? false} key={link.name}>
                <S.LinkHeader href={link.url}>{link.name}</S.LinkHeader>
              </S.DividedLink>
            ))}
          </S.ContainerHeader>
          <S.IconWrapper>
            {icon && <IconLink badge={1} icon={Person} redirectLink={'/minha-conta'} />}
          </S.IconWrapper>
          {loggedIn === true ? (
            username != null && (
              <S.ButtonHeader
                color="inherit"
                variant="outlined"
                size="large"
                onClick={button.onClick}
              >
                {username}
              </S.ButtonHeader>
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
