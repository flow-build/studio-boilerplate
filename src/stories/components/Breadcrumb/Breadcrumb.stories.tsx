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
        redirectLink: 'https://google.com.br'
      },
      {
        text: 'Apple',
        redirectLink: 'https://google.com.br'
      },
      {
        text: 'iPhone'
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
