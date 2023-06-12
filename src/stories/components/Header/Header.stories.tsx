import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { Logger } from 'utils';

import { MenuProps } from '../Menu/types';
import { MenuAnchor } from '../Menu/utils';
import { Header } from './index';
import { button, links, menuItems } from './mockHeader';

const menuProps: MenuProps = {
  anchor: MenuAnchor.left,
  menuItems: menuItems,
  urlImgLogo: 'https://img.logoipsum.com/263.svg',
  username: 'gustavo.haramura@fdte.io'
};

const propsInputSearch = {
  placeholder: 'Buscar por jogo: Final fantasy',
  searchKey: 'search-feodmjyfmqinygyb4u1y254k',
  engineName: 'video-games',
  endpointBase: 'https://host-2376rb.api.swiftype.com',
  onChange: Logger.info
};

const header: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    urlImgLogo: 'https://img.logoipsum.com/263.svg',
    username: 'gustavo.haramura@fdte.io',
    links: links,
    menu: menuProps,
    button: button,
    search: propsInputSearch
  }
};

export default header;

export const Standard: StoryFn<typeof Header> = (args) => <Header {...args} />;
