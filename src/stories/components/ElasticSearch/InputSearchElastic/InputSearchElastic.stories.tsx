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
    placeholder: 'Buscar',
    searchKey: 'search-nawi3j3vgrr292hkfs83iuai',
    engineName: 'develop-listing-engine',
    endpointBase: 'https://pdef.ent.us-east-1.aws.found.io',
    onChange: Logger.info
  }
};
