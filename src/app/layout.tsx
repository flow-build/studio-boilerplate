'use client';
import React from 'react';

import { Avatar } from 'stories/components/Avatar/index';
import { navLinks, socialMedias } from 'stories/components/Footer/mockFooter';
import { ImageComponent } from 'stories/components/Image';
import { MainContent } from 'stories/components/MainContent';
import { GlobalStyles } from 'theme/Globalstyles';
import { getAavatarURL } from 'utils';

import { Footer } from '../stories/components/Footer/index';
import { Header } from '../stories/components/Header/index';

const links = [
  { name: '[Início]', url: '/' },
  { name: '[Sobre]', url: '/sobre' },
  { name: '[Contato]', url: '/contato' },
  { name: '[FAQ]', url: '/faq' }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const logo = (
    <ImageComponent src="https://img.logoipsum.com/263.svg" alt="Logo" width={150} height={30} />
  );

  const avatar = <Avatar alt={'teste'} src={getAavatarURL('teste@fdte.io')} />;

  return (
    <html lang="pt-br">
      <body>
        <Header
          logo={logo}
          links={links}
          username={'Haramura'}
          button={{
            name: 'Entrar',
            onClick: function (): void {
              throw new Error('Function not implemented.');
            }
          }}
          loggedIn={false}
          avatar={avatar}
        />
        <MainContent>{children}</MainContent>
        <Footer navLinks={navLinks} socialMedia={socialMedias} disclaimer="[Lorem Ipsum text]" />
        <GlobalStyles />
      </body>
    </html>
  );
}
