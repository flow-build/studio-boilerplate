import React from 'react';

import { BodyHeaderProps } from './types';

export const BodyHeader = ({ title }: BodyHeaderProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
