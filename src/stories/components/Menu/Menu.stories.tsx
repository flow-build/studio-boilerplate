import React from 'react';

import { AccessTime, Announcement, House, Message } from '@mui/icons-material';
import { Meta, StoryFn } from '@storybook/react';

import { Menu } from '.';
import { MenuAnchor, MenuVariant } from './utils';

const meta: Meta<typeof Menu> = {
  title: 'Header/Menu',
  component: Menu,
  tags: ['autodocs'],
  args: {
    anchor: MenuAnchor.left,
    variant: MenuVariant.persistent,
    menuItems: [
      {
        id: '1',
        redirectLink: '/anuncios',
        title: 'Anuncios',
        icon: {
          redirectLink: '/anuncios',
          icon: Announcement
        }
      },
      {
        id: '2',
        redirectLink: '/locacoes',
        title: 'Locações',
        icon: {
          redirectLink: '/locacoes',
          icon: House
        }
      },
      {
        id: '2',
        redirectLink: '/mensagens',
        title: 'Mensagens',
        icon: {
          redirectLink: '/mensagens',
          icon: Message
        }
      },
      {
        id: '2',
        redirectLink: '/acessos',
        title: 'Acessos',
        icon: {
          redirectLink: '/acessos',
          icon: AccessTime,
          badge: 12
        }
      }
    ],
    urlImgLogo: 'https://img.logoipsum.com/263.svg',
    username: 'gustavo.haramura@fdte.io'
  }
};

export default meta;

export const Standard: StoryFn<typeof Menu> = (args) => <Menu {...args} />;
