'use client';
import { useState, useCallback } from 'react';

import { debounce } from 'lodash';
import { Logger } from 'utils';

import { InputSearchAutocomplete } from '../../Forms/InputSearchSuggestions';
import { Suggestions } from '../../Forms/InputSearchSuggestions/types';
import { InputSearchElasticProps } from './types';
import { useInputSearchElastic } from './useInputSearchElastic';

export const InputSearchElastic = ({
  placeholder,
  searchKey,
  engineName,
  endpointBase,
  onChange
}: InputSearchElasticProps) => {
  const [suggestions, setSuggestions] = useState<Suggestions[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { getData } = useInputSearchElastic({ searchKey, engineName, endpointBase });

  const onInputChange = useCallback(
    (_: unknown, value: string) => {
      if (value.length >= 3) {
        setIsLoading(true);
        getData(value)
          .then((result: Suggestions[]) => {
            setSuggestions(result);
          })
          .catch((error) => {
            Logger.error('Error on getData InputSearchElastic', error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        setSuggestions([]);
      }
    },
    [getData]
  );

  return (
    <InputSearchAutocomplete
      placeholder={placeholder}
      isLoading={isLoading}
      suggestions={suggestions}
      onInputChange={debounce(onInputChange, 500)}
      onChange={(_, newValue) => onChange(newValue)}
    />
  );
};
