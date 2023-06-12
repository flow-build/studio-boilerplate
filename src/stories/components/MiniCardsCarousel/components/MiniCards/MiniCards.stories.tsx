import type { Meta, StoryObj } from '@storybook/react';

import { MiniCards } from './';

const meta: Meta<typeof MiniCards> = {
  title: 'MiniCardsCarousel/MiniCards',
  component: MiniCards,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof MiniCards>;

export const Primary: Story = {
  args: {
    name: 'Alameda Dourado',
    urlImg: 'https://bolsaimovel.com.br/uploads/104_1652364708_2375873.jpg',
    description: 'Jurerê internacional, Florianópolis',
    urlRedirect: 'https://google.com.br',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut imperdiet massa, non volutpat justo. '
  }
};
