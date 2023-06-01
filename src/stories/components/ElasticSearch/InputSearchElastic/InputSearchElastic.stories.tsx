import type { Meta, StoryObj } from '@storybook/react';
import { Logger } from 'utils';

import { InputSearchElastic } from '.';

const meta: Meta<typeof InputSearchElastic> = {
  title: 'Elastic/InputSearchElastic',
  component: InputSearchElastic,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof InputSearchElastic>;

export const Primary: Story = {
  args: {
    placeholder: 'Buscar por jogo: Final fantasy',
    searchKey: 'search-feodmjyfmqinygyb4u1y254k',
    engineName: 'video-games',
    endpointBase: 'https://host-2376rb.api.swiftype.com',
    onChange: Logger.info
  }
};
