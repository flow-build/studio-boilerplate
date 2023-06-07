import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Logo } from '.';

const image: Meta<typeof Logo> = {
  title: 'Header/Logo',
  component: Logo
};

export default image;

export const Standard: StoryFn<typeof Logo> = (args) => <Logo {...args} />;
