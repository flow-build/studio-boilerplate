import React from 'react';

import MUIGlobalStyles, { GlobalStylesProps } from '@mui/material/GlobalStyles';

const STYLES: GlobalStylesProps['styles'] = {
  '*': {
    fontFamily: 'Open Sans, sans-serif',
    margin: '0',
    padding: '0',
    border: '0',
    boxSizing: 'border-box'
  },
  'ol, ul': {
    listStyle: 'none'
  }
};

export const GlobalStyles: React.FC = () => {
  return <MUIGlobalStyles styles={STYLES} />;
};