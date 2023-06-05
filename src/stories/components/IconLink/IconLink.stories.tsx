import React from 'react';

import { Person2Outlined } from '@mui/icons-material';
import { Meta, StoryFn } from '@storybook/react';

import { IconLink } from '.';
import { IconLinkProps } from './types';

const meta: Meta<typeof IconLink> = {
  title: 'Menu/IconLink',
  component: IconLink,
  tags: ['autodocs']
};

export default meta;

const Template: StoryFn<IconLinkProps> = (args) => <IconLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: Person2Outlined,
  redirectLink: '#',
  badge: 1,
  iconSize: 24
};
