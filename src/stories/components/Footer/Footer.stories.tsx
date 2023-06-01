import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Footer } from '.';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs']
};

export default meta;

export const Standard: StoryFn<typeof Footer> = (args) => {
  // eslint-disable-next-line react-perf/jsx-no-new-array-as-prop
  const navLinks = [
    {
      title: 'Link Group 1',
      links: [
        { id: '1', label: 'Lorem Ipsum', redirectLink: '/' },
        { id: '2', label: 'Lorem Ipsum', redirectLink: '/' }
      ]
    },
    {
      title: 'Link Group 2',
      links: [
        { id: '3', label: 'Lorem Ipsum', redirectLink: '/' },
        { id: '4', label: 'Lorem Ipsum', redirectLink: '/' }
      ]
    }
  ];

  // eslint-disable-next-line react-perf/jsx-no-new-array-as-prop
  const socialMedias = [
    {
      title: 'Facebook',
      icons: [{ id: '1', name: 'Facebook', redirectLink: 'https://www.facebook.com' }]
    },
    {
      title: 'Instagram',
      icons: [{ id: '2', name: 'Instagram', redirectLink: 'https://www.instagram.com' }]
    },
    {
      title: 'Twitter',
      icons: [{ id: '3', name: 'Twitter', redirectLink: 'https://www.twitter.com' }]
    },
    {
      title: 'Youtube',
      icons: [{ id: '4', name: 'Youtube', redirectLink: 'https://www.youtube.com' }]
    }
  ];

  return (
    <Footer
      {...args}
      navLinks={navLinks}
      socialMedias={socialMedias}
      disclaimer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    />
  );
};
