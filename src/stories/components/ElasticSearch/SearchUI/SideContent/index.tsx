import React from 'react';

import { SideContentProps } from './types';

export const SideContent = ({ title }: SideContentProps) => {
  if (!title) {
    return null;
  }

  return (
    <div>
      <h1>Side content {title}</h1>
    </div>
  );
};
