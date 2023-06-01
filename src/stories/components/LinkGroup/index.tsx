import React, { FC, useMemo } from 'react';

import { Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';

import * as S from './styles';
import { LinkGroupsProps } from './types';

export const LinkGroup: FC<LinkGroupsProps> = ({ title = '', links = [] }) => {
  const renderedLinks = useMemo(() => {
    return links.map((link) => {
      return (
        <ListItem key={link.id} disableGutters>
          <Link href={link.redirectLink}>{link.label}</Link>
        </ListItem>
      );
    });
  }, [links]);

  return (
    <S.Container item xs={12} sm={4} md={3} xl={3}>
      <Typography variant="h4">{title}</Typography>
      <S.ListLinks>{renderedLinks}</S.ListLinks>
    </S.Container>
  );
};