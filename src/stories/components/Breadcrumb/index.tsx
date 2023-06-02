import React, { FC } from 'react';

import BreadcrumbsMui from '@mui/material/Breadcrumbs';

import * as S from './styles';
import { BreadcrumbsProps } from './types';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, separator = '>' }) => {
  return (
    <BreadcrumbsMui separator={separator} aria-label="breadcrumb">
      {items?.map((item, index) => {
        const isLastItem = index + 1 === items.length;
        if (isLastItem && item.redirectLink === undefined) {
          return <S.LastText key={item.text}>{item.text}</S.LastText>;
        }
        return (
          <S.LinkLabel key={item.text} href={item.redirectLink ?? ''}>
            {item.text}
          </S.LinkLabel>
        );
      })}
    </BreadcrumbsMui>
  );
};
