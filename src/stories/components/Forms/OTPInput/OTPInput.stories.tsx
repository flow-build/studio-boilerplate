import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { OTPInput } from 'stories/components/Forms/OTPInput';
import { OTPInputProps } from 'stories/components/Forms/OTPInput/types';

const meta: Meta<OTPInputProps> = {
  title: 'Form/OTPInput',
  component: OTPInput,
  args: { length: 5, autoFocus: true },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof OTPInput>;

const Standard = (args: OTPInputProps) => {
  return <OTPInput {...args} />;
};

export const Primary: Story = {
  render: (args) => <Standard {...args} />
};
