'use client';
import { useState, useCallback } from 'react';

import { debounce } from 'lodash';

import api from '../../../../services/httpClient';
import { InputSearchAutocomplete } from '../../Forms/InputSearchSuggestions';
import { Suggestions } from '../../Forms/InputSearchSuggestions/types';
import { ResultSuggestions } from '../types';
import { InputSuggestionsProps } from './types';

export const InputSuggestions = ({
  placeholder,
  searchKey,
  engineName,
  endpointBase,
  onChange
}: InputSuggestionsProps) => {
  const [suggestions, setSuggestions] = useState<Suggestions[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = useCallback(
    (_: unknown, value: string) => {
      console.log({ value });
      if (value.length >= 3) {
        setIsLoading(true);
        getData(value, searchKey, engineName, endpointBase)
          .then((result: Suggestions[]) => {
            setSuggestions(result);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        setSuggestions([]);
      }
    },
    [searchKey, engineName, endpointBase]
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

async function getData(
  term: string,
  searchKey: string,
  engineName: string,
  endpointBase: string
): Promise<Suggestions[]> {
  api.setBaseUrl(endpointBase);
  api.setHeader({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${searchKey}`
  });

  const body = {
    query: term,
    size: 3
  };

  const data = await api.post<ResultSuggestions>(
    `/api/as/v1/engines/${engineName}/query_suggestion`,
    body
  );

  return (data as ResultSuggestions).results.documents.map((item: { suggestion: string }) => ({
    text: item.suggestion,
    value: item.suggestion
  }));
}
