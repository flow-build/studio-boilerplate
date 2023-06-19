'use client';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { Layout } from 'components/Layout';
import { store } from 'store';
import { GlobalStyles } from 'theme/Globalstyles';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <ReduxProvider store={store}>
          <Layout>{children}</Layout>
          <GlobalStyles />
        </ReduxProvider>
      </body>
    </html>
  );
}
