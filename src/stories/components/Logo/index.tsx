'use client';
import React from 'react';

import { ImageComponent } from '../Image';

export const Logo: React.FC = () => {
  return (
    <ImageComponent
      redirectLink="/"
      src="https://img.logoipsum.com/263.svg"
      alt="Logo"
      width={150}
      height={30}
    />
  );
};
