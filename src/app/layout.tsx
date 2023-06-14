'use client';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { elasticSearch } from 'config';
import { useRouter } from 'next/navigation';
import { project } from 'shared/enum';
import { store } from 'store';
import { Header, Footer, MainContent } from 'stories/components';
import { InputSearchElasticProps } from 'stories/components/ElasticSearch/InputSearchElastic/types';
import { navLinks, socialMedias } from 'stories/components/Footer/mockFooter';
import { links, menuItems } from 'stories/components/Header/mockHeader';
import { Loading } from 'stories/components/Loading';
import { MenuProps } from 'stories/components/Menu/types';
import { MenuAnchor } from 'stories/components/Menu/utils';
import { GlobalStyles } from 'theme/Globalstyles';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const propsInputSearch: InputSearchElasticProps = {
    placeholder: 'Buscar por jogo',
    searchKey: elasticSearch.searchKey,
    engineName: elasticSearch.engineName,
    endpointBase: elasticSearch.endpointBase,
    onChange: (item) => {
      router.push(`/search/${item?.text}`);
    }
  };

  const menu: MenuProps = {
    anchor: MenuAnchor.left,
    menuItems: menuItems,
    urlImgLogo: project.urlImgLogo,
    username: store.getState()?.user?.email
  };

  return (
    <html lang="pt-br">
      <body>
        <ReduxProvider store={store}>
          <Header
            urlImgLogo={project.urlImgLogo}
            menu={menu}
            links={links}
            username={store.getState()?.user?.email}
            button={{
              name: 'Entrar',
              onClick: function (): void {
                router.push('/login');
              }
            }}
            search={propsInputSearch}
          />
          <MainContent>{children}</MainContent>
          <Footer navLinks={navLinks} socialMedia={socialMedias} disclaimer="[Lorem Ipsum text]" />
          <GlobalStyles />
          {store.getState()?.loading.isLoading && <Loading size={200} />}
        </ReduxProvider>
      </body>
    </html>
  );
}
