import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { LinkGroup } from '.';

const meta: Meta<typeof LinkGroup> = {
  title: 'Footer/LinkGroup',
  args: {
    title: 'Lorem Ipsum',
    links: [
      {
        id: '1',
        label: 'Lorem Ipsum',
        redirectLink: '/'
      },
      {
        id: '2',
        label: 'Lorem Ipsum',
        redirectLink: '/'
      },
      {
        id: '3',
        label: 'Lorem Ipsum',
        redirectLink: '/'
      },
      {
        id: '4',
        label: 'Lorem Ipsum',
        redirectLink: '/'
      }
    ]
  }
};

export default meta;

export const Standard: StoryFn<typeof LinkGroup> = (args) => <LinkGroup {...args} />;
