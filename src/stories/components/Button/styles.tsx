import { css } from '@emotion/react';
import ButtonMui from '@mui/material/Button';
import { Theme, styled } from '@mui/material/styles';

const selectColor = (theme: Theme, color = '', customColor = '') => {
  if (customColor != null) {
    return customColor;
  } else {
    switch (color) {
      case 'primary':
        return theme.palette.primary.main;
      case 'secondary':
        return theme.palette.secondary.main;
      case 'success':
        return theme.palette.success.main;
      case 'error':
        return theme.palette.error.main;
      case 'info':
        return theme.palette.info.main;
      case 'warning':
        return theme.palette.warning.main;
      case 'inherit':
      default:
        return 'none';
    }
  }
};

export const ButtonContainer = styled(ButtonMui, {
  shouldForwardProp: (prop) => !['customColor'].includes(prop as string)
})<{
  customColor?: string;
}>`
  ${({ theme, color = 'inherit', variant, customColor = '' }) => css`
    background-color: ${customColor.length > 0 ||
    (color.length > 0 &&
    color !== 'inherit' &&
    ['primary', 'secondary', 'success', 'error', 'info', 'warning', ''].includes(color)
      ? theme.palette[color].main
      : '')};
    color: ${variant === 'contained' && !['primary', 'secondary'].includes(color)
      ? customColor ?? theme.palette.primary.main
      : 'inherit'};
    text-transform: none;
  `}

  &:hover {
    opacity: 0.5;
    background: ${({ theme, color, customColor }) => selectColor(theme, color, customColor)};
  }
  &:disabled {
    opacity: 0.5;
    background: ${({ theme, color, customColor }) => {
      if (customColor != null) {
        return customColor;
      }
      if (color === 'info') {
        return theme.palette.info.main;
      }
      return color;
    }}!important;
    color: ${({ theme, color, customColor }) => {
      if (customColor !== null || color === 'info') {
        return theme.palette.primary.main;
      }
      return theme.palette.primary.main;
    }};
  }
`;
