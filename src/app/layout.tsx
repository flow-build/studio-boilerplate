'use client';
import React from 'react';

import { Header } from 'stories/components';
import { Footer } from 'stories/components/Footer';
import { navLinks, socialMedias } from 'stories/components/Footer/mockFooter';
import { links, menuItems } from 'stories/components/Header/mockHeader';
import { MainContent } from 'stories/components/MainContent';
import { MenuProps } from 'stories/components/Menu/types';
import { MenuAnchor } from 'stories/components/Menu/utils';
import { GlobalStyles } from 'theme/Globalstyles';

const menu: MenuProps = {
  anchor: MenuAnchor.left,
  menuItems: menuItems,
  logo: true
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Header
          logo={true}
          menu={menu}
          links={links}
          username={'Haramura'}
          button={{
            name: 'Entrar',
            onClick: function (): void {
              throw new Error('Function not implemented.');
            }
          }}
          loggedIn={false}
        />
        <MainContent>{children}</MainContent>
        <Footer navLinks={navLinks} socialMedia={socialMedias} disclaimer="[Lorem Ipsum text]" />
        <GlobalStyles />
      </body>
    </html>
  );
}
