import React, { FC, ReactElement, useMemo } from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import { TextFieldProps } from '@mui/material/TextField';

import * as S from './styles';
import { InputProps } from './types';

export const InputText: FC<TextFieldProps & InputProps> = ({
  value,
  name,
  id,
  label,
  onChange,
  type,
  error,
  helperText,
  onBlur,
  onFocus,
  size,
  disabled,
  placeholder,
  leftIcon,
  rigthIcon,
  icon,
  ...props
}): ReactElement => {
  const IconInputRight = useMemo(() => {
    rigthIcon ??= false;
    if (rigthIcon) {
      return <InputAdornment position="end">{icon}</InputAdornment>;
    }
    return null;
  }, [rigthIcon]);

  const IconInputLeft = useMemo(() => {
    leftIcon ??= false;
    if (leftIcon) {
      return <InputAdornment position="start">{icon}</InputAdornment>;
    }
    return null;
  }, [leftIcon]);

  return (
    <S.InputText
      label={label}
      name={name}
      id={id}
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      InputProps={{
        endAdornment: IconInputLeft,
        startAdornment: IconInputRight
      }}
      error={error}
      helperText={helperText}
      onChange={onChange}
      size={size}
      placeholder={placeholder}
      {...props}
    ></S.InputText>
  );
};
