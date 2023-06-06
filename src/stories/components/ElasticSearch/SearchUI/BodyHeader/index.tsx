import React from 'react';

import { BodyHeaderProps } from './types';

export const BodyHeader = ({ title }: BodyHeaderProps) => {
  return (
    <div>
      <h1>Body header {title}</h1>
    </div>
  );
};
