import React, { FC, useMemo } from 'react';

import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { SocialNetworkIcon } from '../../utils';
import * as S from './styles';
import { ItemIconProps } from './types';

export const ItemIcon: FC<ItemIconProps> = ({ id, name, redirectLink }) => {
  const Icon = useMemo(() => {
    return SocialNetworkIcon[name];
  }, [name]);

  return (
    <ListItem key={id}>
      <Link href={redirectLink} title={redirectLink}>
        <S.IconName>
          <Icon fontSize="medium" />
          <Typography>{name}</Typography>
        </S.IconName>
      </Link>
    </ListItem>
  );
};
