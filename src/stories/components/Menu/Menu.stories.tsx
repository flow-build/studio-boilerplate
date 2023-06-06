import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Menu } from '.';
import { MenuAnchor, MenuVariant } from './utils';

const meta: Meta<typeof Menu> = {
  title: 'Header/Menu',
  component: Menu,
  args: {
    anchor: MenuAnchor.left,
    variant: MenuVariant.persistent,
    menuItems: [
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
    ],
    logo: true
  }
};

export default meta;

export const Standard: StoryFn<typeof Menu> = (args) => <Menu {...args} />;
