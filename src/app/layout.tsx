'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import { navLinks, socialMedias } from 'stories/components/Footer/mockFooter';
import { ImageComponent } from 'stories/components/Image';
import { MainContent } from 'stories/components/MainContent';
import { GlobalStyles } from 'theme/Globalstyles';

import { Footer } from '../stories/components/Footer/index';
import { Header } from '../stories/components/Header/index';

const links = [
  { name: '[Início]', url: '/' },
  { name: '[Sobre]', url: '/sobre' },
  { name: '[Contato]', url: '/contato' },
  { name: '[FAQ]', url: '/faq' }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const logo = (
    <ImageComponent
      src="https://img.logoipsum.com/263.svg"
      alt="Logo"
      width={150}
      height={30}
      redirectLink="/"
    />
  );

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
              router.push('/login');
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
