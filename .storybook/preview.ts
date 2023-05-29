import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import { GlobalStyles } from '../src/theme/Globalstyles';
import defaultTheme from '../src/theme/defaultTheme';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: defaultTheme
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
    GlobalStyles
  })
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
