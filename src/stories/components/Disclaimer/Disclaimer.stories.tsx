import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Disclaimer } from '.';

const meta: Meta<typeof Disclaimer> = {
  title: 'Footer/Disclaimer',
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br> '
  }
};

export default meta;

export const Standard: StoryFn<typeof Disclaimer> = (args) => <Disclaimer {...args} />;
