import type { Meta, StoryObj } from '@storybook/react';
import { Logger } from 'utils';

import { InputSuggestions } from './';

const meta: Meta<typeof InputSuggestions> = {
  title: 'Form/InputSuggestions',
  component: InputSuggestions,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof InputSuggestions>;

export const Primary: Story = {
  args: {
    placeholder: 'Buscar',
    searchKey: 'search-nawi3j3vgrr292hkfs83iuai',
    engineName: 'develop-listing-engine',
    endpointBase: 'https://pdef.ent.us-east-1.aws.found.io',
    onChange: Logger.info
  }
};
