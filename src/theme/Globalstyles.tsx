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

  'input::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  },

  'input::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  },

  'input[type=number]': {
    '-moz-appearance': 'textfield'
  }
};

export const GlobalStyles: React.FC = () => {
  return <MUIGlobalStyles styles={STYLES} />;
};
