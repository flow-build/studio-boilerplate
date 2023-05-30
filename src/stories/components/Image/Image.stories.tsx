/* eslint-disable max-len */
import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { ImageProps } from './types';
import { ImageComponent } from './Image';

const image: Meta<typeof Image> = {
  title: 'Header/Image',
  component: ImageComponent,
  args: {
    src: 'https://looka.com/s/128799989',
    redirectLink: '/',
    alt: 'Logo',
    width: 10,
    height: 5
  } satisfies ImageProps
};

export default image;

export const Standard: StoryFn<typeof ImageComponent> = (args: ImageProps) => (
  <ImageComponent {...args} />
);
