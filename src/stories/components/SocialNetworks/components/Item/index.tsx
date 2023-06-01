import React, { FC } from 'react';

import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { getSocialNetworkIcon } from '../../utils';
import * as S from './styles';
import { ItemProps } from './types';

export const Item: FC<ItemProps> = ({ id, name, redirectLink }) => {
  const SocialNetworkIcon = getSocialNetworkIcon(name);

  if (!SocialNetworkIcon) {
    return null;
  }

  return (
    <ListItem key={id}>
      <Link href={redirectLink} title={redirectLink}>
        <S.IconName>
          <SocialNetworkIcon fontSize="medium" />
          <Typography>{name}</Typography>
        </S.IconName>
      </Link>
    </ListItem>
  );
};
