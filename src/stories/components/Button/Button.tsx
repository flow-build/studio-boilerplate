import React, { useCallback } from 'react';
import { ButtonComponentProps } from './types';
import * as S from './styles';

export function Button({
  onClick,
  children,
  variant = 'outlined',
  size = 'medium',
  color,
  customColor,
  fullWidth,
  startIcon,
  style,
  type,
  disabled
}: ButtonComponentProps) {
  const handleClick = useCallback(() => {
    if (onClick != null) onClick();
  }, [onClick]);

  const buttonColor = color ?? customColor;

  return (
    <S.ButtonContainer
      onClick={handleClick}
      variant={variant}
      size={size}
      color={color}
      customColor={buttonColor}
      fullWidth={fullWidth}
      style={style}
      startIcon={startIcon}
      disabled={disabled}
      type={type}
    >
      {children}
    </S.ButtonContainer>
  );
}
