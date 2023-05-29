import type { Meta, StoryObj } from '@storybook/react';

import { InputText } from './';

const meta: Meta<typeof InputText> = {
  title: 'Form/InputText',
  component: InputText,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof InputText>;

export const Primary: Story = {};
