import React from 'react';

import { AccessTime, House, Message } from '@mui/icons-material';
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
        redirectLink: '/inicio',
        title: 'Anuncios',
        icon: {
          redirectLink: '/',
          icon: AccessTime
        }
      },
      {
        id: '2',
        redirectLink: '/sobre',
        title: 'Locações',
        icon: {
          redirectLink: '/',
          icon: House
        }
      },
      {
        id: '2',
        redirectLink: '/contato',
        title: 'Mensagens',
        icon: {
          redirectLink: '/',
          icon: Message
        }
      },
      {
        id: '2',
        redirectLink: '/faq',
        title: 'Acessos',
        icon: {
          redirectLink: '/',
          icon: AccessTime,
          badge: 12
        }
      }
    ],
    logo: true
  }
};

export default meta;

export const Standard: StoryFn<typeof Menu> = (args) => <Menu {...args} />;
