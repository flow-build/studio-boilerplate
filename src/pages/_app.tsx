import { Provider as ReduxProvider } from 'react-redux';

import { Layout } from 'components/Layout';
import { AppProps } from 'next/app';
import { store } from 'store';
import { GlobalStyles } from 'theme/Globalstyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </ReduxProvider>
  );
}

MyApp.displayName = 'app';

export default MyApp;
