import React, { FC } from 'react';

import ListItem from '@mui/material/ListItem';
import Link from 'next/link';

import * as S from './styles';
import { LinkGroupsProps } from './types';

export const LinkGroup: FC<LinkGroupsProps> = ({ title = '', links = [] }) => {
  return (
    <S.Container item xs={12} sm={4} md={3} xl={3}>
      <S.Title>{title}</S.Title>
      <S.ListLinks>
        {links.map((link) => (
          <ListItem key={link.id} disableGutters>
            <Link href={link.redirectLink}>{link.label}</Link>
          </ListItem>
        ))}
      </S.ListLinks>
    </S.Container>
  );
};
