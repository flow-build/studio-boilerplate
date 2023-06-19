import React from 'react';

import { AppBar } from '@mui/material';
import { Logo } from 'components';
import { getAvatarURL } from 'utils';

import { Avatar } from '../Avatar';
import { InputSearchElastic } from '../ElasticSearch';
import { Menu } from '../Menu';
import * as S from './styles';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({
  urlImgLogo,
  links,
  button,
  username,
  menu,
  search
}) => {
  return (
    <AppBar position="static" color="default">
      <S.ToolbarHeader>
        <S.Content>
          {menu && (
            <S.WrapperMenu>
              <Menu {...menu} />
            </S.WrapperMenu>
          )}
          {urlImgLogo && (
            <S.WrapperLogo>
              <Logo urlImg={urlImgLogo} />
            </S.WrapperLogo>
          )}
          <S.WrapperInputSearch>
            {search && <InputSearchElastic {...search} className="search-header" />}
          </S.WrapperInputSearch>
          <S.ContainerHeader loggedIn={!!username}>
            {links?.map((link) => (
              <S.DividedLink loggedIn={!!username} key={link.name}>
                <S.LinkHeader href={link.url}>{link.name}</S.LinkHeader>
              </S.DividedLink>
            ))}
          </S.ContainerHeader>
          <S.ButtonAvatar>
            {username ? (
              <Avatar alt={username} src={getAvatarURL(username)} />
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
          </S.ButtonAvatar>
        </S.Content>
      </S.ToolbarHeader>
    </AppBar>
  );
};
