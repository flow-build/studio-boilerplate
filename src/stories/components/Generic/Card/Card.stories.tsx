import type { Meta, StoryObj } from '@storybook/react';
import { getCurrencyIntegerValue } from 'utils/formmater';

import { Card } from './';

const meta: Meta<typeof Card> = {
  title: 'Generic/Card',
  component: Card,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    title: 'Alameda Dourado',
    urlImg: 'https://bolsaimovel.com.br/uploads/104_1652364708_2375873.jpg',
    description: 'Jurerê internacional, Florianópolis',
    urlRedirect: 'https://google.com.br',
    price: {
      value: getCurrencyIntegerValue(852),
      description: 'p/ período'
    },
    mode: 'vertical',
    attributes: [
      {
        name: 'quarto',
        value: '1'
      },
      {
        name: 'de área',
        value: '587 m2'
      },
      {
        name: 'banheiros',
        value: '2'
      }
    ]
  }
};
