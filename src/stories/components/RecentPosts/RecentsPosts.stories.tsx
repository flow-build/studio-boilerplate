import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { getCurrencyIntegerValue } from 'utils/formmater';

import { RecentPosts } from '.';

const meta: Meta<typeof RecentPosts> = {
  title: 'RecentPosts',
  component: RecentPosts,
  args: {
    title: 'Recent Posts',
    price: {
      value: getCurrencyIntegerValue(1234),
      description: 'p/ período'
    },
    urlRedirect: 'https://google.com.br',
    description: 'Outra qualquer descrição'
  },
  tags: ['autodocs']
};

export default meta;

export const Standard: StoryFn<typeof RecentPosts> = (args) => {
  return <RecentPosts {...args} />;
};
