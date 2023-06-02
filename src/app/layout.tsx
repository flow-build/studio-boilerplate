'use client';
import React from 'react';

import { navLinks, socialMedias } from 'stories/components/Footer/mockFooter';
import { ImageComponent } from 'stories/components/Image';
import { MainContent } from 'stories/components/MainContent';
import { MenuAnchor, MenuOptions } from 'stories/components/Menu/utils';
import { GlobalStyles } from 'theme/Globalstyles';

import { Footer } from '../stories/components/Footer/index';
import { Header } from '../stories/components/Header/index';
import { Menu } from '../stories/components/Menu/index';

const links = [
  { name: '[Início]', url: '/' },
  { name: '[Sobre]', url: '/sobre' },
  { name: '[Contato]', url: '/contato' },
  { name: '[FAQ]', url: '/faq' }
];

const menuItems = [
  {
    id: '1',
    redirectLink: '/inicio',
    title: 'Inicio'
  },
  {
    id: '2',
    redirectLink: '/sobre',
    title: 'Sobre'
  },
  {
    id: '2',
    redirectLink: '/contato',
    title: 'Contato'
  },
  {
    id: '2',
    redirectLink: '/faq',
    title: 'FAQ'
  }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const logo = (
    <ImageComponent src="https://img.logoipsum.com/263.svg" alt="Logo" width={150} height={30} />
  );

  return (
    <html lang="pt-br">
      <body>
        <Header
          logo={logo}
          menu={
            <Menu
              type={MenuOptions.hamburger}
              anchor={MenuAnchor.left}
              menuItems={menuItems}
              logo={
                <ImageComponent
                  src="https://img.logoipsum.com/263.svg"
                  alt={'Logo'}
                  width={150}
                  height={30}
                />
              }
            />
          }
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
