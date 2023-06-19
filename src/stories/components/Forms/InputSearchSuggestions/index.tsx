import React, { useState } from 'react';

import { IconButton } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { SearchIcon } from 'shared/icons';

import { InputSearchAutocompleteProps } from './types';

export const InputSearchAutocomplete = ({
  placeholder,
  noOptionsText = 'Nenhuma opção encontrada',
  loadingText = 'Buscando...',
  suggestions,
  isLoading = false,
  onInputChange,
  onChange,
  onClickIconSearch,
  onKeyUp,
  className
}: InputSearchAutocompleteProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Autocomplete
      className={className}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) => option.text === value.text}
      getOptionLabel={(option) => option.text}
      noOptionsText={noOptionsText}
      options={suggestions}
      loading={isLoading}
      loadingText={loadingText}
      onInputChange={onInputChange}
      onChange={onChange}
      onKeyUp={onKeyUp}
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
                  <IconButton type="button" aria-label="search" onClick={onClickIconSearch}>
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
