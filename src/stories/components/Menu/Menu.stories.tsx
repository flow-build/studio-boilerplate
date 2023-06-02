import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Menu } from '.';
import { ImageComponent } from '../Image';
import { MenuAnchor, MenuOptions, MenuVariant } from './utils';

const meta: Meta<typeof Menu> = {
  title: 'Header/Menu',
  component: Menu,
  args: {
    type: MenuOptions.hamburger,
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
    logo: (
      <ImageComponent
        src="https://img.logoipsum.com/263.svg"
        alt={'Logo'}
        width={150}
        height={30}
      />
    )
  }
};

export default meta;

export const Standard: StoryFn<typeof Menu> = (args) => <Menu {...args} />;
