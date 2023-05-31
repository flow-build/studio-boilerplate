import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Footer } from '.';
import { Disclaimer } from '../Disclaimer';
import * as LinkGroup from '../LinkGroup/LinkGroup.stories';
import * as SocialNetworks from '../SocialNetworks/SocialNetworks.stories';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs']
};

export default meta;

export const Standard: StoryFn<typeof Footer> = (args) => (
  <Footer {...args}>
    <LinkGroup.Standard
      title="Lorem Ipsum"
      links={[
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
      ]}
    />
    <LinkGroup.Standard
      title="Lorem Ipsum"
      links={[
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
      ]}
    />
    <SocialNetworks.Standard
      title="Lorem Ipsum"
      icons={[
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
      ]}
    />
    <Disclaimer text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>" />
  </Footer>
);
