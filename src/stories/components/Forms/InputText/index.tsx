import React, { FC, ReactElement, useMemo } from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import { TextFieldProps } from '@mui/material/TextField';
import { InputProps } from 'stories/components/Forms/InputText/types';
import { getMaskByName } from 'utils/masks/utilities';

import * as S from './styles';

export const InputText: FC<TextFieldProps & InputProps> = ({
  value,
  name,
  id,
  label,
  onChange,
  error,
  helperText,
  onBlur,
  onFocus,
  size,
  disabled,
  placeholder,
  leftIcon,
  rightIcon,
  customMask,
  mask,
  ...props
}): ReactElement => {
  const IconInputRight = useMemo(() => {
    if (rightIcon !== undefined) {
      return <InputAdornment position="end">{rightIcon}</InputAdornment>;
    }
    return null;
  }, [rightIcon]);

  const IconInputLeft = useMemo(() => {
    if (leftIcon !== undefined) {
      return <InputAdornment position="start">{leftIcon}</InputAdornment>;
    }
    return null;
  }, [leftIcon]);

  const inputValue = useMemo(() => {
    if (!value) {
      return value;
    }

    if (customMask) {
      return customMask(String(value));
    }

    if (mask) {
      const maskFunction = getMaskByName(mask);
      return maskFunction(String(value));
    }

    return value;
  }, [mask, customMask, value]);

  return (
    <S.InputText
      label={label}
      name={name}
      id={id}
      value={inputValue}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      InputProps={{
        endAdornment: IconInputRight,
        startAdornment: IconInputLeft
      }}
      error={error}
      helperText={helperText}
      onChange={onChange}
      size={size}
      placeholder={placeholder}
      {...props}
    />
  );
};
