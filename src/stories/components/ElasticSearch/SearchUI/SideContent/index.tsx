import React from 'react';

import { SideContentProps } from './types';

export const SideContent = ({ title = 'Filtrar por' }: SideContentProps) => {
  return (
    <div>
      <h1>Side content {title}</h1>
    </div>
  );
};
