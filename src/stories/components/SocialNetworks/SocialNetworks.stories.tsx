import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { SocialNetworks } from '.';

const meta: Meta<typeof SocialNetworks> = {
  title: 'Footer/SocialNetworks',
  args: {
    title: 'Lorem Ipsum',
    icons: [
      {
        id: '1',
        name: 'facebook',
        redirectLink: 'https://www.facebook.com/'
      },
      {
        id: '2',
        name: 'instagram',
        redirectLink: 'https://www.instagram.com/'
      },
      {
        id: '3',
        name: 'twitter',
        redirectLink: 'https://twitter.com/'
      },
      {
        id: '4',
        name: 'youtube',
        redirectLink: 'https://www.youtube.com/'
      }
    ]
  }
};

export default meta;

export const Standard: StoryFn<typeof SocialNetworks> = (args) => <SocialNetworks {...args} />;
