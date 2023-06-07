import type { Meta, StoryObj } from '@storybook/react';

import { MiniCardsCarousel } from './';

const meta: Meta<typeof MiniCardsCarousel> = {
  title: 'MiniCardsCarousel',
  component: MiniCardsCarousel,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof MiniCardsCarousel>;

export const Primary: Story = {
  args: {
    miniCards: [
      {
        name: 'Alameda Dourado',
        urlImg: 'https://bolsaimovel.com.br/uploads/104_1652364708_2375873.jpg',
        description: 'Jurerê internacional, Florianópolis',
        urlRedirect: 'https://google.com.br',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut imperdiet massa, non volutpat justo. '
      },
      {
        name: 'Alameda Dourado',
        urlImg: 'https://bolsaimovel.com.br/uploads/104_1652364708_2375873.jpg',
        description: 'Jurerê internacional, Florianópolis'
      },
      {
        name: 'Alameda Dourado',
        urlImg: 'https://bolsaimovel.com.br/uploads/104_1652364708_2375873.jpg'
      }
    ]
  }
};
