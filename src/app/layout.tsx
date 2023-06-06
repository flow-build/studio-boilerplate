'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import { Header, Footer, MainContent } from 'stories/components';
import { Avatar } from 'stories/components/Avatar';
import { navLinks, socialMedias } from 'stories/components/Footer/mockFooter';
import { links, menuItems } from 'stories/components/Header/mockHeader';
import { MenuProps } from 'stories/components/Menu/types';
import { MenuAnchor } from 'stories/components/Menu/utils';
import { GlobalStyles } from 'theme/Globalstyles';
import { getAavatarURL } from 'utils';

const menu: MenuProps = {
  anchor: MenuAnchor.left,
  menuItems: menuItems,
  logo: true
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const avatar = <Avatar alt={'teste'} src={getAavatarURL('teste@fdte.io')} />;

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
              router.push('/login');
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
