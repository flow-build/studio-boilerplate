import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { PersonIcon } from 'shared';

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
  icon: PersonIcon,
  redirectLink: '#',
  badge: 1,
  title: 'Título do ícone'
};
