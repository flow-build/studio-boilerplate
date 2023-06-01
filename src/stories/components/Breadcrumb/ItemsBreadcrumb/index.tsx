import React, { useMemo } from 'react';
import { ItemsBreadcrumbProps } from './types';
import * as S from './styles';

export const ItemsBreadcrumb = ({ items }: ItemsBreadcrumbProps) => {
  const breadcrumbs = useMemo(() => {
    if (items.length > 0) {
      return items?.map((item, index) => {
        const isLastItem = index + 1 === items.length;
        if (isLastItem && !item.redirectLink) {
          return <S.LastText key={item.text}>{item.text}</S.LastText>;
        }

        return (
          <S.LinkLabel key={item.text} href={item.redirectLink ?? ''}>
            {item.text}
          </S.LinkLabel>
        );
      });
    }

    return [];
  }, [items]);

  return breadcrumbs;
};
