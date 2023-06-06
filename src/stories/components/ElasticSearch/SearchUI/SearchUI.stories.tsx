import type { Meta, StoryObj } from '@storybook/react';

import { SearchUI } from './';
import { congigSearchUI } from './mock';

const meta: Meta<typeof SearchUI> = {
  title: 'Elastic/SearchUI',
  component: SearchUI,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SearchUI>;

export const Primary: Story = {
  args: {
    title: 'Categoria',
    config: congigSearchUI,
    titleField: 'name',
    urlField: 'image_url,'
  }
};
