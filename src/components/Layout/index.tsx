import React, { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

import { elasticSearch } from 'config';
import { useRouter } from 'next/navigation';
import { project } from 'shared/enum';
import { RootState } from 'store';
import { Header, Footer, MainContent } from 'stories/components';
import { InputSearchElasticProps } from 'stories/components/ElasticSearch/InputSearchElastic/types';
import { navLinks, socialMedias } from 'stories/components/Footer/mockFooter';
import { links, menuItems } from 'stories/components/Header/mockHeader';
import { MenuProps } from 'stories/components/Menu/types';
import { MenuAnchor } from 'stories/components/Menu/utils';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const email = useSelector((store: RootState) => store.user.email);

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
    username: email
  };

  const button = {
    name: 'Entrar',
    onClick: function (): void {
      router.push('/login');
    }
  };

  return (
    <>
      <Header
        urlImgLogo={project.urlImgLogo}
        menu={menu}
        links={links}
        username={email}
        button={button}
        search={propsInputSearch}
      />
      <MainContent>{children}</MainContent>
      <Footer navLinks={navLinks} socialMedia={socialMedias} disclaimer="[Lorem Ipsum text]" />
    </>
  );
};
