import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Footer } from '.';
import { navLinks, socialMedias } from './mockFooter';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs']
};

export default meta;

export const Standard: StoryFn<typeof Footer> = (args) => {
  return (
    <Footer
      {...args}
      navLinks={navLinks}
      socialMedia={socialMedias}
      disclaimer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    />
  );
};
