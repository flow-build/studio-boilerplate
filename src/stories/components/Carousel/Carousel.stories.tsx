import type { Meta, StoryFn } from '@storybook/react';

import { Carousel } from './';
import { mockCategories } from './mockResult';

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  component: Carousel,
  tags: ['autodocs']
};

export default meta;

export const Standard: StoryFn<typeof Carousel> = (args) => {
  return <Carousel {...args} data={mockCategories} slidesPerView={10} />;
};
