import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Button } from 'stories/components/Forms/Button';
import { ButtonProps } from 'stories/components/Forms/Button/types';

const meta: Meta<ButtonProps> = {
  title: 'Form/Button',
  component: Button,
  args: {},
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Button>;

const Standard = (args: ButtonProps) => {
  return <Button {...args}>Button</Button>;
};

export const Primary: Story = {
  render: (args) => <Standard {...args} />
};
