import type { Meta, StoryObj } from '@storybook/react';

import { SearchUI } from './';
import { congigSearchUI, configFields } from './mock';

const meta: Meta<typeof SearchUI> = {
  title: 'Elastic/SearchUI',
  component: SearchUI,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SearchUI>;

export const Primary: Story = {
  args: {
    title: 'Sua fantástica segunda casa',
    config: congigSearchUI,
    configFields
  }
};
