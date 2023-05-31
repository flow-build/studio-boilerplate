'use client';
import React from 'react';

import { IconButton } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { SearchIcon } from 'shared/icons';

import { InputSearchAutocompleteProps } from './types';

export const InputSearchAutocomplete = ({
  placeholder,
  noOptionsText = 'Nenhuma opção encontrada',
  suggestions,
  isOpen,
  setOpen,
  isLoading = false,
  onInputChange,
  onChange
}: InputSearchAutocompleteProps) => {
  return (
    <Autocomplete
      open={isOpen}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) => option.text === value.text}
      getOptionLabel={(option) => option.text}
      noOptionsText={noOptionsText}
      options={suggestions}
      loading={isLoading}
      onInputChange={onInputChange}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={placeholder}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  <IconButton type="button" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                )}
              </React.Fragment>
            )
          }}
        />
      )}
    />
  );
};
