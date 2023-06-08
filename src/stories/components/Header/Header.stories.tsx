import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { getAvatarURL } from 'utils';

import { Avatar } from '../Avatar';
import { MenuProps } from '../Menu/types';
import { MenuAnchor } from '../Menu/utils';
import { Header } from './index';
import { button, links, menuItems } from './mockHeader';

const username = 'haramura';
const email = 'gustavo.haramura@fdte.io';
const avatar = <Avatar alt={'haramura'} src={getAvatarURL(email)} />;

const menuProps: MenuProps = {
  anchor: MenuAnchor.left,
  menuItems: menuItems,
  logo: true,
  email: email,
  username: username
};

const header: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    loggedIn: true,
    username: 'Haramura',
    links: links,
    menu: menuProps,
    button: button,
    avatar: avatar
  }
};

export default header;

export const Standard: StoryFn<typeof Header> = (args) => <Header {...args} />;
