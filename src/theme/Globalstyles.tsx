'use client';
import React from 'react';

import MUIGlobalStyles, { GlobalStylesProps } from '@mui/material/GlobalStyles';

const STYLES: GlobalStylesProps['styles'] = {
  html: {
    fontSize: '16px'
  },
  '*': {
    fontFamily: 'Open Sans, sans-serif',
    margin: '0',
    padding: '0',
    border: '0',
    boxSizing: 'border-box'
  },
  'ol, ul': {
    listStyle: 'none'
  },
  a: {
    textDecoration: 'inherit'
  },
  '::-webkit-scrollbar': {
    width: '0.3125rem'
  },
  '::-webkit-scrollbar-track': {
    background: '-webkit-linear-gradient(180deg, #fff 40%, #fff 50%, #fff 70%)',
    borderRadius: '0.625rem'
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#212121',
    borderRadius: '0.625rem',
    boxShadow: 'inset 0 0 0.375rem hsla(0, 0%, 75%, 0.3)',
    '-webkit-box-shadow': 'inset 0 0 0.375rem hsla(0, 0%, 75%, 0.3)'
  }
};

export const GlobalStyles: React.FC = () => {
  return <MUIGlobalStyles styles={STYLES} />;
};
