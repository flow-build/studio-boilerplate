import React from 'react';

import { ImageComponent } from 'stories/components';

import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({ urlImg, redirectLink }) => {
  return (
    <ImageComponent
      redirectLink={redirectLink ?? '/'}
      src={urlImg}
      alt="Logo"
      width={150}
      height={30}
    />
  );
};
