import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Button, Props } from 'stories/components/Forms/Button';

const meta: Meta<Props> = {
  title: 'Form/Button',
  component: Button,
  args: {},
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Button>;

const Standard = (args: Props) => {
  return <Button {...args}>Button</Button>;
};

export const Primary: Story = {
  render: (args) => <Standard {...args} />
};
