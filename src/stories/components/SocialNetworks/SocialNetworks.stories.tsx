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
        name: 'Facebook',
        redirectLink: 'https://www.facebook.com/'
      },
      {
        id: '2',
        name: 'Instagram',
        redirectLink: 'https://www.instagram.com/'
      },
      {
        id: '3',
        name: 'Twitter',
        redirectLink: 'https://twitter.com/'
      },
      {
        id: '4',
        name: 'Youtube',
        redirectLink: 'https://www.youtube.com/'
      }
    ]
  }
};

export default meta;

export const Standard: StoryFn<typeof SocialNetworks> = (args) => <SocialNetworks {...args} />;
