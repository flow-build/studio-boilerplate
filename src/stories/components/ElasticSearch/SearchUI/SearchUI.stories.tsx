import type { Meta, StoryObj } from '@storybook/react';
import { mockCategories } from 'stories/components/Carousel/mockResult';

import { SearchUI } from './';
import { congigSearchUI, configFields, congigSearchUI2, configFields2 } from './mock';

const meta: Meta<typeof SearchUI> = {
  title: 'Elastic/SearchUI',
  component: SearchUI,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SearchUI>;

export const Primary: Story = {
  args: {
    title: 'Games',
    config: congigSearchUI,
    configFields,
    carouselItems: {
      data: mockCategories,
      slidesPerView: 10
    }
  }
};

export const Secondary: Story = {
  args: {
    title: 'Games',
    config: congigSearchUI2,
    configFields: configFields2,
    carouselItems: {
      data: mockCategories,
      slidesPerView: 10
    }
  }
};
