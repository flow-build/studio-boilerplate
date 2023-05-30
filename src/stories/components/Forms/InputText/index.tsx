import React, { FC, ReactNode, forwardRef, useCallback, useMemo, useState } from 'react';
import { IMaskInput } from 'react-imask';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { TextFieldProps } from '@mui/material/TextField';

import * as S from './styles';
import { MaskProps, InputProps } from './types';
import { SvgIcon } from '@mui/material';

export const InputText: FC<TextFieldProps & InputProps> = ({
  value,
  maskType,
  name,
  id,
  iconName,
  colorIcon,
  label,
  onChange,
  type,
  testId,
  error,
  helperText,
  onBlur,
  onFocus,
  size,
  disabled,
  placeholder,
  position,
  ...props
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const TextMaskCustom = useMemo(
    () =>
      forwardRef<HTMLElement, MaskProps>((props, ref) => {
        const { onChange, ...other } = props;

        const mask = maskType ? Mask[maskType](props.value) : '';

        return (
          <IMaskInput
            {...other}
            mask={mask as string}
            definitions={{
              '#': /[0-9]/
            }}
            inputRef={() => ref}
            onAccept={(value: unknown) => {
              onChange({ target: { name: props.name, value } });
            }}
            overwrite
          />
        );
      }),
    [maskType]
  );

  const TypesInput = useCallback(() => {
    if (type === 'password') {
      if (showPassword) {
        return 'text';
      }
      return 'password';
    }
    return type;
  }, [showPassword, type]);

  const IconInputStart = useMemo(() => {
    if (position === 'start') {
      return (
        <InputAdornment position={position}>
          <SvgIcon component={VisibilityIcon} />
        </InputAdornment>
      );
    }
    return null;
  }, [position]);

  const IconInputEnd = useMemo(() => {
    if (position === 'end') {
      return (
        <InputAdornment position={position}>
          <SvgIcon component={VisibilityIcon} />
        </InputAdornment>
      );
    }
    return null;
  }, [position]);

  const IconInputButton = useMemo(() => {
    if (type === 'password') {
      return (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            data-testid="password-input-icon"
            edge="end"
          >
            {showPassword ? (
              <SvgIcon component={VisibilityIcon} />
            ) : (
              <SvgIcon component={VisibilityOffIcon} />
            )}
          </IconButton>
        </InputAdornment>
      );
    }

    return null;
  }, [colorIcon, showPassword, type]);

  return (
    <S.InputText
      data-testid={testId}
      label={label}
      name={name}
      id={id}
      value={value}
      type={TypesInput()}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      InputProps={{
        inputComponent: maskType && (TextMaskCustom as never),
        endAdornment: (IconInputButton as ReactNode) ?? IconInputEnd,
        startAdornment: IconInputStart
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
