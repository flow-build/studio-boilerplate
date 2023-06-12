import { SocialNetworksProps } from '../SocialNetworks/types';

export const navLinks = [
  {
    title: 'Lorem Ipsum 1',
    links: [
      { id: '1', label: 'Lorem Ipsum 1', redirectLink: '/' },
      { id: '2', label: 'Lorem Ipsum 2', redirectLink: '/' },
      { id: '3', label: 'Lorem Ipsum 3', redirectLink: '/' },
      { id: '4', label: 'Lorem Ipsum 4', redirectLink: '/' }
    ]
  },
  {
    title: 'Lorem Ipsum 2',
    links: [
      { id: '1', label: 'Lorem Ipsum 1', redirectLink: '/' },
      { id: '2', label: 'Lorem Ipsum 2', redirectLink: '/' },
      { id: '3', label: 'Lorem Ipsum 3', redirectLink: '/' },
      { id: '4', label: 'Lorem Ipsum 4', redirectLink: '/' }
    ]
  }
];

export const socialMedias: SocialNetworksProps = {
  title: 'Lorem Ipsum',
  icons: [
    { id: '1', name: 'facebook', redirectLink: 'https://www.facebook.com' },
    { id: '2', name: 'instagram', redirectLink: 'https://www.instagram.com' },
    { id: '3', name: 'twitter', redirectLink: 'https://www.twitter.com' },
    { id: '4', name: 'youtube', redirectLink: 'https://www.youtube.com' }
  ]
};
