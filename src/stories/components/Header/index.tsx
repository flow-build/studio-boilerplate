'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import * as S from './styles';
import { IconButton } from '@mui/material';
import { HeaderProps } from './types';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Header: React.FC<HeaderProps> = ({ logo, links, button, loggedIn, username }) => {
  const socialIcons = [
    {
      name: 'Instagram',
      iconSrc: InstagramIcon,
      url: 'https://www.instagram.com/'
    },
    {
      name: 'Twitter',
      iconSrc: TwitterIcon,
      url: 'https://www.twitter.com/'
    },
    {
      name: 'Facebook',
      iconSrc: FacebookIcon,
      url: 'https://www.facebook.com/'
    }
  ];

  if (loggedIn) {
    return (
      <AppBar position="static" color="default">
        <S.ToolbarHeader>
          {logo}
          <S.ContainerHeaderLogged>
            {links?.map((link, index) => (
              <React.Fragment key={link.name}>
                <Typography variant="h6">
                  <S.LinkHeader href={link.url}>{link.name}</S.LinkHeader>
                </Typography>
                {index !== links.length - 1 && <S.DividerHeader>|</S.DividerHeader>}
              </React.Fragment>
            ))}
          </S.ContainerHeaderLogged>
          {username != null && (
            <S.ContainerHeaderAvatar>
              <IconButton>
                <S.AvatarHeader>{username[0]}</S.AvatarHeader>
                {username}
              </IconButton>
            </S.ContainerHeaderAvatar>
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
