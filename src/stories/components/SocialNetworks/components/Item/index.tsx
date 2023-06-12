import React, { FC, useMemo } from 'react';

import Link from 'next/link';

import { SocialNetworkIcon } from '../../utils';
import * as S from './styles';
import { ItemIconProps } from './types';

export const ItemIcon: FC<ItemIconProps> = ({ id, name, redirectLink }) => {
  const Icon = useMemo(() => {
    return SocialNetworkIcon[name];
  }, [name]);

  return (
    <S.ListItemIcon key={id}>
      <Link href={redirectLink} title={redirectLink}>
        <S.IconName>
          <Icon fontSize="small" />
          <S.SocialMediaName>{name}</S.SocialMediaName>
        </S.IconName>
      </Link>
    </S.ListItemIcon>
  );
};
