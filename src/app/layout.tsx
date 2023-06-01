'use client';
import { navLinks, socialMedias } from 'stories/components/Footer/mockFooter';
import { ImageComponent } from 'stories/components/Image';
import { GlobalStyles } from 'theme/Globalstyles';

import { Footer } from '../stories/components/Footer/index';
import { Header } from '../stories/components/Header/index';
import { button, links, loggedIn, username } from './mockLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const logo = (
    <ImageComponent src="https://img.logoipsum.com/263.svg" alt="Logo" width={150} height={30} />
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header logo={logo} links={links} username={username} button={button} loggedIn={loggedIn} />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer navLinks={navLinks} socialMedia={socialMedias} disclaimer="[Lorem Ipsum text]" />
      <GlobalStyles />
    </div>
  );
}
