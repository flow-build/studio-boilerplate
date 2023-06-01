import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from './';

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  component: Carousel,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const Standard = () => {
  return (
    <div>
      <Carousel slidesPerView={10} />
    </div>
  );
};

export const Primary: Story = {
  render: () => <Standard />
};
