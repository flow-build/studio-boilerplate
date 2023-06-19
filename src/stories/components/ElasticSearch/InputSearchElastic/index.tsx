import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { debounce } from 'lodash';
import { RootState } from 'store';
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
  onChange,
  className
}: InputSearchElasticProps) => {
  const [valueInput, setValueInput] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestions[]>([]);

  const isLoading = useSelector((store: RootState) => store.loading.isLoading);

  const { getData } = useInputSearchElastic({ searchKey, engineName, endpointBase });

  const onKeyUp = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement> & React.ChangeEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        const { value } = event.target;
        onChange({ text: value, value: value });
        setSuggestions([]);
      }
    },
    [onChange]
  );

  const onInputChange = useCallback(
    (_: unknown, value: string) => {
      setValueInput(value);
      if (value.length >= 3) {
        getData(value)
          .then((result: Suggestions[]) => {
            setSuggestions(result);
          })
          .catch((error) => {
            Logger.error('Error on getData InputSearchElastic', error);
          });
      } else {
        setSuggestions([]);
      }
    },
    [getData]
  );

  const onClickSearch = useCallback(() => {
    if (valueInput) {
      onChange({ text: valueInput, value: valueInput });
      setSuggestions([]);
    }
  }, [valueInput, onChange]);

  return (
    <InputSearchAutocomplete
      className={className}
      placeholder={placeholder}
      isLoading={isLoading}
      suggestions={suggestions}
      onInputChange={debounce(onInputChange, 500)}
      onChange={(_, newValue) => onChange(newValue)}
      onClickIconSearch={onClickSearch}
      onKeyUp={onKeyUp}
    />
  );
};
