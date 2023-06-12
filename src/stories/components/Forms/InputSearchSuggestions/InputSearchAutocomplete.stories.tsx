import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Logger } from 'utils';

import { InputSearchAutocomplete } from '.';
import { mockAutocomplete } from './mockResult';
import { InputSearchAutocompleteProps, Suggestions } from './types';

const meta: Meta<typeof InputSearchAutocomplete> = {
  title: 'Form/InputSearchAutocomplete',
  component: InputSearchAutocomplete,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof InputSearchAutocomplete>;

export const Primary: Story = {
  args: {
    placeholder: 'Buscar'
  },
  render: (args) => {
    return <WrapperSuggestions {...args} />;
  }
};

function WrapperSuggestions(args: InputSearchAutocompleteProps) {
  const [suggestions, setSuggestions] = React.useState<Suggestions[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getData = async (term: string) => {
    const result = await getMockData(term);
    setSuggestions(result);
    setIsLoading(false);
  };

  const onInputChange = React.useCallback(async (_: unknown, newValue: string) => {
    if (newValue.length >= 3) {
      setIsLoading(true);
      await getData(newValue);
    } else {
      setSuggestions([]);
    }
  }, []);

  return (
    <InputSearchAutocomplete
      {...args}
      isLoading={isLoading}
      suggestions={suggestions}
      onInputChange={onInputChange}
      onChange={(_, newValue) => Logger.info({ newValue })}
      onClickIconSearch={Logger.info}
    />
  );
}

async function getMockData(term: string): Promise<Suggestions[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return mockAutocomplete.filter((item) =>
    item.text.toLocaleLowerCase().includes(term.toLocaleLowerCase())
  );
}
