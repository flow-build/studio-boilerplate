import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from './index';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  args: {
    items: [
      {
        text: 'Home',
        redirectLink: '/'
      },
      {
        text: 'Apple',
        redirectLink: '/categoria/apple'
      },
      {
        text: 'iPhone',
        redirectLink: '/categoria/apple/iphone'
      }
    ]
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Standart: Story = {
  render: (args) => <Breadcrumbs {...args} />
};
