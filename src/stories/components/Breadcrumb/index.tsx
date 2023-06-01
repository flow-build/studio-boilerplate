import React, { FC, useMemo } from 'react';

import { BreadcrumbsProps } from './types';
import BreadcrumbsMui from '@mui/material/Breadcrumbs';
import { ItemsBreadcrumb } from './ItemsBreadcrumb';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, separator = '>' }) => {
  const breadcrumbs = useMemo(() => {
    return ItemsBreadcrumb({ items });
  }, [items]);

  return (
    <BreadcrumbsMui separator={separator} aria-label="breadcrumb">
      {breadcrumbs}
    </BreadcrumbsMui>
  );
};
