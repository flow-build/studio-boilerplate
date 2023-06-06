import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { ProgressBar } from '.';

const meta: Meta<typeof ProgressBar> = {
  title: 'Generic/ProgressBar',
  component: ProgressBar,
  args: {
    descriptionTip: ` `,
    strength: 'strong'
  }
};

export default meta;

export const Standard: StoryFn<typeof ProgressBar> = (args) => {
  return <ProgressBar {...args} />;
};
