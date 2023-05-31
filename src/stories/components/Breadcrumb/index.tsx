import React, { FC, useMemo } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import * as S from './styles';
import { BreadcrumbsProps } from './types';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ allLinks = false, items }) => {
  const breadcrumbs = useMemo(() => {
    if (items.length > 0) {
      return items?.map((item, index) => {
        if (index + 1 === items.length && !allLinks) {
          return <S.LastText key={item.text}>{item.text}</S.LastText>;
        }

        return (
          <S.Referance key={item.text} href={item.redirectLink}>
            {' '}
            {item.text}{' '}
          </S.Referance>
        );
      });
    }

    return [];
  }, [items, allLinks]);

  return (
    <S.Breadcrumbs separator="›" aria-label="breadcrumb">
      {breadcrumbs}
    </S.Breadcrumbs>
  );
};
